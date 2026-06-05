'use client';

import { useState, useCallback } from 'react';

/**
 * useDemoCall
 *
 * Manages all API logic and form state for the demo call request form.
 * No JSX - can be used by any UI component.
 *
 * States:
 *   idle | submitting | success | error | outside_hours | rate_limited | duplicate
 */

const E164_PATTERN = /^\+[1-9]\d{6,14}$/;

export function useDemoCall() {
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

    // Client-side E.164 validation
    const phone = (formData.phone || '').trim();
    if (!E164_PATTERN.test(phone)) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number in international format (e.g. +4915123456789).');
      return;
    }

    // Capture UTM params from current page URL
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
      // honeypot - always empty from the real form
      website: formData.website || '',
    };

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const orgSlug = process.env.NEXT_PUBLIC_OUTBOUND_ORG_SLUG || 'crito-demo';
    const apiKey = process.env.NEXT_PUBLIC_DEMO_API_KEY || '';

    try {
      const response = await fetch(`${apiUrl}/api/public/${orgSlug}/demo-calls`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(apiKey ? { 'X-Demo-Api-Key': apiKey } : {}),
        },
        body: JSON.stringify(payload),
      });

      const body = await response.json().catch(() => ({}));

      if (response.status === 429) {
        setStatus('rate_limited');
        return;
      }

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(null); // generic - never surface internals
        return;
      }

      // 200 response
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
  }, []);

  return { status, resultData, errorMessage, submit, reset };
}
