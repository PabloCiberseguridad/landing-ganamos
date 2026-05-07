// lib/pixel.ts
// ─────────────────────────────────────────────
// Meta Pixel helper — todos los eventos del sitio
// PIXEL ID: 2897525123911731
// ─────────────────────────────────────────────

export const PIXEL_ID = '2897525123911731';

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

/** Dispara fbq de forma segura (no rompe en SSR) */
function fbq(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args);
  }
}

// ── Eventos ──────────────────────────────────

/**
 * PageView — se dispara automáticamente en _app / layout
 * al montar el componente del Pixel.
 */
export function trackPageView() {
  fbq('track', 'PageView');
}

/**
 * ViewContent — cuando el usuario scrollea a una sección clave
 * @param sectionName  e.g. "Beneficios", "Cómo Funciona", "FAQ"
 */
export function trackViewContent(sectionName: string) {
  fbq('track', 'ViewContent', {
    content_name: sectionName,
    content_category: 'Casino Landing',
  });
}

/**
 * Lead — EVENTO PRINCIPAL
 * Se dispara en CADA clic a un botón de WhatsApp.
 * @param buttonName  e.g. "WhatsApp Hero", "WhatsApp Beneficios", "WhatsApp Footer"
 */
export function trackWhatsAppLead(buttonName: string) {
  fbq('track', 'Lead', {
    content_name: buttonName,
    content_category: 'WhatsApp CTA',
  });
}
