// lib/whatsapp.ts
// ─────────────────────────────────────────────
// Config central de WhatsApp Business
// Número: 5493562547636
// ─────────────────────────────────────────────

export const WA_NUMBER = '5493562547636';

/** Mensajes precargados por botón — optimizados para alta tasa de apertura */
export const WA_MESSAGES = {
  hero:       'Hola! Quiero empezar a jugar en Ganamos 🎰 ¿Me ayudás a crear mi cuenta?',
  beneficios: 'Hola! Vi los beneficios de Ganamos y me interesa. ¿Cómo me registro?',
  comofunciona:'Hola! Quiero crear mi cuenta en Ganamos y empezar a jugar. ¿Qué necesito?',
  testimonios:'Hola! Vi las opiniones de Ganamos y me convenció. ¿Cómo arranco?',
  faq:        'Hola! Tengo una consulta sobre Ganamos antes de registrarme.',
  footer:     'Hola! Quiero más info sobre Ganamos para comenzar a jugar.',
  flotante:   'Hola! Quiero jugar en Ganamos 🎰',
} as const;

export type WAButtonKey = keyof typeof WA_MESSAGES;

/** Genera el link de WhatsApp con mensaje precargado */
export function buildWALink(key: WAButtonKey): string {
  const msg = encodeURIComponent(WA_MESSAGES[key]);
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

/** Mapeo botón → content_name para el Pixel */
export const WA_PIXEL_NAMES: Record<WAButtonKey, string> = {
  hero:        'WhatsApp Hero',
  beneficios:  'WhatsApp Beneficios',
  comofunciona:'WhatsApp Cómo Funciona',
  testimonios: 'WhatsApp Testimonios',
  faq:         'WhatsApp FAQ',
  footer:      'WhatsApp Footer',
  flotante:    'WhatsApp Flotante',
};
