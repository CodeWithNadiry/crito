'use client';

import { useState, useCallback } from 'react';
import { useLanguageStore } from '@/store/useLanguage';

/**
 * useDemoCall
 *
 * Submits via same-origin POST /api/demo-calls (Next.js Route Handler).
 * The voice-ai backend URL and API key stay on the server only.
 * DevTools will show this request + form data (unavoidable for browser forms).
 *
 * States:
 *   idle | submitting | success | error | outside_hours | rate_limited | duplicate
 */

const E164_PATTERN = /^\+[1-9]\d{6,14}$/;

export function useDemoCall() {
  const t = useLanguageStore((s) => s.t);
  const [status, setStatus] = useState('idle');
  const [resultData, setResultData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const reset = useCallback(() => {
    setStatus('idle');
    setResultData(null);
    setErrorMessage(null);
  }, []);

  const submit = useCallback(async (formData) => {
    setStatus('submitting');
    setErrorMessage(null);

    const phone = (formData.phone || '').trim();
    if (!E164_PATTERN.test(phone)) {
      setStatus('error');
      setErrorMessage(t('demo_err_phone_api'));
      return;
    }

    const utmParams = {};
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
        const val = params.get(key);
        if (val) utmParams[key] = val;
      }
    }

    const payload = {
      name: formData.name,
      business_email: formData.business_email,
      phone,
      consent: formData.consent,
      company: formData.company || undefined,
      ...utmParams,
      website: formData.website || '',
    };

    try {
      const response = await fetch('/api/demo-calls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const body = await response.json().catch(() => ({}));

      if (response.status === 429) {
        setStatus('rate_limited');
        return;
      }

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(null);
        return;
      }

      const data = body.data || {};

      if (data.duplicate) {
        setResultData(data);
        setStatus('duplicate');
        return;
      }

      if (data.outside_hours) {
        setResultData(data);
        setStatus('outside_hours');
        return;
      }

      setResultData(data);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, [t]);

  return { status, resultData, errorMessage, submit, reset };
}
