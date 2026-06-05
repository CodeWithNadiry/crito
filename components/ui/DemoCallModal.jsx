'use client';

import { useState } from 'react';
import { useDemoCall } from '@/hooks/useDemoCall';
import { useLanguageStore } from '@/store/useLanguage';
import Button from './Button';

const E164_PATTERN = /^\+[1-9]\d{6,14}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value, t) {
  switch (name) {
    case 'name':
      if (!value || !String(value).trim()) return t('demo_err_name_required');
      return null;

    case 'business_email':
      if (!value || !String(value).trim()) return t('demo_err_email_required');
      if (!EMAIL_PATTERN.test(String(value).trim())) return t('demo_err_email_invalid');
      return null;

    case 'phone': {
      const trimmed = String(value || '').trim();
      if (!trimmed) return t('demo_err_phone_required');
      if (!E164_PATTERN.test(trimmed)) return t('demo_err_phone_format');
      return null;
    }

    case 'consent':
      if (!value) return t('demo_err_consent_required');
      return null;

    default:
      return null;
  }
}

const REQUIRED_FIELDS = ['name', 'business_email', 'phone', 'consent'];

const EMPTY_FORM = {
  name: '',
  business_email: '',
  phone: '',
  company: '',
  consent: false,
  website: '',
};

const BASE_INPUT = 'w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2';
const INPUT_NORMAL = `${BASE_INPUT} border-gray-300 focus:ring-blue-500`;
const INPUT_ERROR = `${BASE_INPUT} border-red-400 focus:ring-red-400 bg-red-50`;

export default function DemoCallModal({ isOpen, onClose }) {
  const { t } = useLanguageStore();
  const { status, resultData, errorMessage, submit, reset } = useDemoCall();

  const [form, setForm] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState({});

  function getError(name) {
    if (!touched[name]) return null;
    return validateField(name, form[name], t);
  }

  if (!isOpen) return null;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const allTouched = REQUIRED_FIELDS.reduce((acc, f) => ({ ...acc, [f]: true }), {});
    setTouched(allTouched);

    const hasError = REQUIRED_FIELDS.some((f) => validateField(f, form[f], t) !== null);
    if (hasError) return;

    await submit(form);
  }

  function handleClose() {
    reset();
    setForm(EMPTY_FORM);
    setTouched({});
    onClose();
  }

  const maskedPhone =
    resultData?.phone || form.phone
      ? `+${'•'.repeat(Math.max(0, (resultData?.phone || form.phone).length - 5))}${(resultData?.phone || form.phone).slice(-4)}`
      : '';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-label={t('demo_modal_aria')}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label={t('demo_modal_close_aria')}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">{t('demo_modal_title')}</h2>
        <p className="text-sm text-gray-500 mb-6">{t('demo_modal_subtitle')}</p>

        {status === 'success' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">📞</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">{t('demo_success_title')}</p>
            <p className="text-gray-600 mt-2">
              {t('demo_success_prefix')} <strong>{maskedPhone}</strong> {t('demo_success_suffix')}
            </p>
            <Button className="mt-6" onClick={handleClose}>{t('demo_done')}</Button>
          </div>
        )}

        {status === 'outside_hours' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">🕐</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">{t('demo_outside_title')}</p>
            <p className="text-gray-600 mt-2">{t('demo_outside_body')}</p>
            <Button className="mt-6" onClick={handleClose}>{t('demo_got_it')}</Button>
          </div>
        )}

        {status === 'duplicate' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">{t('demo_duplicate_title')}</p>
            <p className="text-gray-600 mt-2">{t('demo_duplicate_body')}</p>
            <Button className="mt-6" onClick={handleClose}>{t('demo_got_it')}</Button>
          </div>
        )}

        {status === 'rate_limited' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">⏳</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">{t('demo_rate_title')}</p>
            <p className="text-gray-600 mt-2">{t('demo_rate_body')}</p>
            <Button className="mt-6" onClick={handleClose}>{t('demo_close')}</Button>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">⚠️</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">{t('demo_error_title')}</p>
            <p className="text-gray-600 mt-2">
              {errorMessage || t('demo_error_body')}
            </p>
            <div className="flex gap-3 justify-center mt-6">
              <Button variant="secondary" onClick={reset}>{t('demo_try_again')}</Button>
              <Button onClick={handleClose}>{t('demo_close')}</Button>
            </div>
          </div>
        )}

        {(status === 'idle' || status === 'submitting') && (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div style={{ display: 'none' }} aria-hidden="true">
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-name">
                {t('demo_label_name')} <span className="text-red-500">*</span>
              </label>
              <input
                id="dc-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('demo_placeholder_name')}
                aria-invalid={!!getError('name')}
                aria-describedby={getError('name') ? 'dc-name-error' : undefined}
                className={getError('name') ? INPUT_ERROR : INPUT_NORMAL}
              />
              {getError('name') && (
                <p id="dc-name-error" className="mt-1 text-xs text-red-500" role="alert">
                  {getError('name')}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-email">
                {t('demo_label_email')} <span className="text-red-500">*</span>
              </label>
              <input
                id="dc-email"
                name="business_email"
                type="email"
                value={form.business_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('demo_placeholder_email')}
                aria-invalid={!!getError('business_email')}
                aria-describedby={getError('business_email') ? 'dc-email-error' : undefined}
                className={getError('business_email') ? INPUT_ERROR : INPUT_NORMAL}
              />
              {getError('business_email') && (
                <p id="dc-email-error" className="mt-1 text-xs text-red-500" role="alert">
                  {getError('business_email')}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-phone">
                {t('demo_label_phone')} <span className="text-red-500">*</span>
              </label>
              <input
                id="dc-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t('demo_placeholder_phone')}
                aria-invalid={!!getError('phone')}
                aria-describedby="dc-phone-hint dc-phone-error"
                className={getError('phone') ? INPUT_ERROR : INPUT_NORMAL}
              />
              {getError('phone') ? (
                <p id="dc-phone-error" className="mt-1 text-xs text-red-500" role="alert">
                  {getError('phone')}
                </p>
              ) : (
                <p id="dc-phone-hint" className="text-xs text-gray-400 mt-1">
                  {t('demo_phone_hint')}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-company">
                {t('demo_label_company')}{' '}
                <span className="text-gray-400">{t('demo_label_optional')}</span>
              </label>
              <input
                id="dc-company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder={t('demo_placeholder_company')}
                className={INPUT_NORMAL}
              />
            </div>

            <div>
              <div className="flex items-start gap-2">
                <input
                  id="dc-consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!getError('consent')}
                  aria-describedby={getError('consent') ? 'dc-consent-error' : undefined}
                  className={`mt-0.5 h-4 w-4 rounded focus:ring-blue-500 ${
                    getError('consent')
                      ? 'border-red-400 accent-red-500'
                      : 'border-gray-300 text-blue-600'
                  }`}
                />
                <label htmlFor="dc-consent" className="text-sm text-gray-600">
                  {t('demo_consent_prefix')}{' '}
                  <a href="/privacy" target="_blank" className="text-blue-600 underline">
                    {t('demo_consent_privacy')}
                  </a>
                  <span className="text-red-500 ml-1">*</span>
                </label>
              </div>
              {getError('consent') && (
                <p id="dc-consent-error" className="mt-1 text-xs text-red-500" role="alert">
                  {getError('consent')}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-2 w-full"
            >
              {status === 'submitting' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  {t('demo_submitting')}
                </span>
              ) : (
                t('demo_submit')
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
