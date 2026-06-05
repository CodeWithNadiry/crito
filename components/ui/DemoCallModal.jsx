'use client';

import { useState } from 'react';
import { useDemoCall } from '@/hooks/useDemoCall';
import Button from './Button';

// ── Validation rules ──────────────────────────────────────────────────────────

const E164_PATTERN = /^\+[1-9]\d{6,14}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate a single field value.
 * Returns an error string if invalid, or null if valid.
 *
 * @param {string} name  - Field name
 * @param {*}      value - Field value (string or boolean for consent)
 * @returns {string|null}
 */
function validateField(name, value) {
  switch (name) {
    case 'name':
      if (!value || !String(value).trim()) return 'Full name is required.';
      return null;

    case 'business_email':
      if (!value || !String(value).trim()) return 'Business email is required.';
      if (!EMAIL_PATTERN.test(String(value).trim())) return 'Please enter a valid email address.';
      return null;

    case 'phone': {
      const trimmed = String(value || '').trim();
      if (!trimmed) return 'Phone number is required.';
      if (!E164_PATTERN.test(trimmed))
        return 'Use international format, e.g. +4915123456789.';
      return null;
    }

    case 'consent':
      if (!value) return 'You must agree to be contacted to continue.';
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

// ── Input class helpers ───────────────────────────────────────────────────────

const BASE_INPUT = 'w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2';
const INPUT_NORMAL = `${BASE_INPUT} border-gray-300 focus:ring-blue-500`;
const INPUT_ERROR  = `${BASE_INPUT} border-red-400 focus:ring-red-400 bg-red-50`;

/**
 * DemoCallModal
 *
 * Full-screen overlay modal for requesting a demo call.
 * Uses useDemoCall hook for all API / state logic.
 * Inline per-field validation: errors shown on blur, or immediately on submit
 * attempt if a field was never touched.
 *
 * Props:
 *   isOpen  {boolean}  - whether the modal is visible
 *   onClose {function} - called when the user dismisses the modal
 */
export default function DemoCallModal({ isOpen, onClose }) {
  const { status, resultData, errorMessage, submit, reset } = useDemoCall();

  const [form, setForm] = useState(EMPTY_FORM);

  // touched tracks which fields the user has blurred (or attempted to submit)
  const [touched, setTouched] = useState({});

  // fieldErrors derives live from current form values for touched fields
  function getError(name) {
    if (!touched[name]) return null;
    return validateField(name, form[name]);
  }

  if (!isOpen) return null;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
    // Re-validate immediately after a change if the field was already touched
    if (touched[name]) {
      // error will be recalculated via getError() on next render — no extra state needed
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Mark all required fields as touched so errors become visible
    const allTouched = REQUIRED_FIELDS.reduce((acc, f) => ({ ...acc, [f]: true }), {});
    setTouched(allTouched);

    // Check for any validation error before hitting the API
    const hasError = REQUIRED_FIELDS.some((f) => validateField(f, form[f]) !== null);
    if (hasError) return;

    await submit(form);
  }

  function handleClose() {
    reset();
    setForm(EMPTY_FORM);
    setTouched({});
    onClose();
  }

  // Mask phone for success message: show last 4 digits
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
      aria-label="Book a Demo Call"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-1">Book a Free Demo Call</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your details and our AI agent will call you within minutes.
        </p>

        {/* ── Success state ───────────────────────────────────────────────── */}
        {status === 'success' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">📞</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">Your demo call is scheduled!</p>
            <p className="text-gray-600 mt-2">
              We&apos;ll call <strong>{maskedPhone}</strong> within 1–3 minutes.
              Keep your phone nearby.
            </p>
            <Button className="mt-6" onClick={handleClose}>Done</Button>
          </div>
        )}

        {/* ── Outside hours state ─────────────────────────────────────────── */}
        {status === 'outside_hours' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">🕐</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">Your request is queued</p>
            <p className="text-gray-600 mt-2">
              Demo calls are available Monday–Friday 8am–8pm and Saturday 10am–4pm (CET).
              We&apos;ll call you when the window opens.
            </p>
            <Button className="mt-6" onClick={handleClose}>Got it</Button>
          </div>
        )}

        {/* ── Duplicate state ─────────────────────────────────────────────── */}
        {status === 'duplicate' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">✅</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">Already scheduled</p>
            <p className="text-gray-600 mt-2">
              A call is already scheduled for this number. Please keep your phone nearby — we&apos;ll call shortly.
            </p>
            <Button className="mt-6" onClick={handleClose}>Got it</Button>
          </div>
        )}

        {/* ── Rate limited state ──────────────────────────────────────────── */}
        {status === 'rate_limited' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">⏳</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">Too many requests</p>
            <p className="text-gray-600 mt-2">
              Too many requests from this device. Please try again later.
            </p>
            <Button className="mt-6" onClick={handleClose}>Close</Button>
          </div>
        )}

        {/* ── Error state ─────────────────────────────────────────────────── */}
        {status === 'error' && (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">⚠️</div>
            <p className="text-lg font-semibold text-[#1E3A5F]">Something went wrong</p>
            <p className="text-gray-600 mt-2">
              {errorMessage || 'Something went wrong. Please email hello@crito.ai.'}
            </p>
            <div className="flex gap-3 justify-center mt-6">
              <Button variant="secondary" onClick={reset}>Try again</Button>
              <Button onClick={handleClose}>Close</Button>
            </div>
          </div>
        )}

        {/* ── Form (idle or submitting) ────────────────────────────────────── */}
        {(status === 'idle' || status === 'submitting') && (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {/* Honeypot - hidden from real users */}
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

            {/* ── Full name ── */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-name">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="dc-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Jane Smith"
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

            {/* ── Business email ── */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-email">
                Business email <span className="text-red-500">*</span>
              </label>
              <input
                id="dc-email"
                name="business_email"
                type="email"
                value={form.business_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="jane@hotel.com"
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

            {/* ── Phone number ── */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-phone">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                id="dc-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+49 151 23456789"
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
                  Include your country code (e.g. +49 for Germany, +1 for US)
                </p>
              )}
            </div>

            {/* ── Company (optional) ── */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dc-company">
                Company <span className="text-gray-400">(optional)</span>
              </label>
              <input
                id="dc-company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Boutique Hotel GmbH"
                className={INPUT_NORMAL}
              />
            </div>

            {/* ── Consent checkbox ── */}
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
                  I agree to be contacted by Crito AI for a product demonstration.
                  Standard call rates may apply.{' '}
                  <a href="/privacy" target="_blank" className="text-blue-600 underline">
                    Privacy Policy
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
                  Scheduling your call...
                </span>
              ) : (
                'Schedule My Demo Call'
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
