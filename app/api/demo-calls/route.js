import { NextResponse } from 'next/server';

/** Fields safe to return to the browser — never forward lead_id or backend internals. */
function toClientResponse(status, body = {}) {
  if (status === 429) {
    return NextResponse.json({ success: false, rate_limited: true }, { status: 429 });
  }

  if (status >= 400) {
    return NextResponse.json(
      { success: false, message: 'Request failed' },
      { status: status >= 500 ? 500 : status }
    );
  }

  const data = body.data || {};
  return NextResponse.json({
    success: true,
    data: {
      outside_hours: Boolean(data.outside_hours),
      duplicate: Boolean(data.duplicate),
    },
  });
}

/**
 * POST /api/demo-calls
 *
 * Server-side proxy to the voice-ai backend.
 * Secrets (API_URL, OUTBOUND_ORG_SLUG, DEMO_API_KEY) never leave the server.
 *
 * The browser will always show this same-origin URL, the form payload, and a
 * small status response in DevTools — that is normal for any web form.
 */
export async function POST(request) {
  const apiUrl = (process.env.API_URL || '').replace(/\/$/, '');
  const orgSlug = process.env.OUTBOUND_ORG_SLUG || 'crito-demo';
  const apiKey = process.env.DEMO_API_KEY || '';

  if (!apiUrl) {
    return NextResponse.json(
      { success: false, message: 'Server configuration error' },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 }
    );
  }

  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '';

  try {
    const response = await fetch(
      `${apiUrl}/api/public/${orgSlug}/demo-calls`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(clientIp ? { 'X-Forwarded-For': clientIp } : {}),
          ...(apiKey ? { 'X-Demo-Api-Key': apiKey } : {}),
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
      }
    );

    const body = await response.json().catch(() => ({}));

    return toClientResponse(response.status, body);
  } catch {
    return NextResponse.json(
      { success: false, message: 'Request failed' },
      { status: 500 }
    );
  }
}
