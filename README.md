# Ganamos.net — Landing Page

Casino online landing page optimizada para conversiones a WhatsApp con Meta Pixel tracking.

---

## 🚀 Deploy en Vercel (5 minutos)

### Opción A — Vercel CLI
```bash
npm i -g vercel
cd ganamos
vercel --prod
```

### Opción B — GitHub + Vercel (recomendado)
1. Subí la carpeta a un repositorio de GitHub
2. Entrá a [vercel.com](https://vercel.com) → New Project
3. Importá el repo → Deploy

---

## 📁 Estructura del proyecto

```
ganamos/
├── app/
│   ├── layout.tsx          ← Meta Pixel init + PageView
│   ├── page.tsx            ← Landing completa (todas las secciones)
│   └── globals.css         ← Design system completo
├── components/
│   └── WAButton.tsx        ← Botón WhatsApp reutilizable con tracking
├── hooks/
│   └── useViewContent.ts   ← Hook para ViewContent en secciones
├── lib/
│   ├── pixel.ts            ← Funciones fbq() centralizadas
│   └── whatsapp.ts         ← Links y mensajes precargados
└── vercel.json
```

---

## 📊 Meta Pixel — Mapa de eventos

| Evento | Dónde se dispara | content_name |
|--------|-----------------|--------------|
| `PageView` | Al cargar la página (layout.tsx) | — |
| `ViewContent` | Al scrollear a cada sección clave | Beneficios / Cómo Funciona / Testimonios / FAQ |
| `Lead` ✅ | Cada clic a botón WhatsApp | WhatsApp Hero / Beneficios / Cómo Funciona / Testimonios / FAQ / Footer / Flotante |

### Código de referencia

```js
// PageView — automático en layout.tsx
fbq('init', '2897525123911731');
fbq('track', 'PageView');

// ViewContent — al ver sección
fbq('track', 'ViewContent', {
  content_name: 'Beneficios',
  content_category: 'Casino Landing',
});

// Lead — EVENTO PRINCIPAL al hacer clic en WhatsApp
fbq('track', 'Lead', {
  content_name: 'WhatsApp Hero',
  content_category: 'WhatsApp CTA',
});
```

---

## 📱 WhatsApp

- **Número:** 5493562547636
- **Mensajes precargados:** configurados en `lib/whatsapp.ts`

Para cambiar los mensajes, editá el objeto `WA_MESSAGES` en `lib/whatsapp.ts`.

---

## 🔧 Variables a personalizar

| Archivo | Variable | Descripción |
|---------|----------|-------------|
| `lib/pixel.ts` | `PIXEL_ID` | Meta Pixel ID |
| `lib/whatsapp.ts` | `WA_NUMBER` | Número de WhatsApp |
| `lib/whatsapp.ts` | `WA_MESSAGES` | Mensajes precargados por botón |
| `app/page.tsx` | `TESTIMONIALS` | Testimonios (nombre, ciudad, texto) |
| `app/page.tsx` | `FAQS` | Preguntas frecuentes |

---

## 💡 Sugerencias de optimización CRO

1. **A/B test el headline del hero** — probá variaciones cada 2 semanas
2. **Agregá un timer de urgencia** en el hero ("Bono disponible hoy")
3. **Popup de exit intent** — ofrecé el bono antes de que el usuario se vaya
4. **Video testimonial** — un clip corto de 15s de un usuario real multiplica conversiones
5. **Stories de IG como tráfico** — el botón flotante de WA convierte muy bien en mobile

---

## ⚠️ Importante — Meta Ads

- ✅ Solo usamos: `PageView`, `ViewContent`, `Lead`
- ❌ NO usar: `Purchase`, `AddPaymentInfo`, `InitiateCheckout`
- El evento `Lead` es el evento de optimización principal para tus campañas

---

## 📋 Checklist antes de lanzar

- [ ] Verificar Pixel ID en `lib/pixel.ts`
- [ ] Verificar número WhatsApp en `lib/whatsapp.ts`
- [ ] Actualizar mensajes precargados según tu estilo
- [ ] Revisar testimonios (podés reemplazarlos con reales)
- [ ] Agregar link real a Términos y Condiciones en el footer
- [ ] Activar evento Lead en Meta Business como evento de conversión principal
- [ ] Probar todos los botones de WhatsApp en mobile
