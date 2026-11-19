'use client';
// app/page.tsx — Ganamos.net Landing v3 (bono 15%)

import { useEffect } from 'react';
import Image from 'next/image';
import { trackWhatsAppLead, trackViewContent } from '@/lib/pixel';
import { WA_NUMBER } from '@/lib/whatsapp';

const WA_MSG = 'Hola! Quiero crear mi usuario y reclamar mi bono del 15% en Ganamos 🎰';

const PAGOS = [
  { label: 'Transferencia', letter: '↔', color: '#22C55E' },
  { label: 'Cripto', letter: 'B', color: '#F97316' },
  { label: 'Naranja X', letter: 'N', color: '#FB6A1F' },
  { label: 'Mercado Pago', letter: 'M', color: '#0EA5E9' },
];

function UsersIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Sparkle() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C518"
      strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    trackViewContent('Landing Bono 15');
  }, []);

  const handleClick = () => {
    trackWhatsAppLead('WhatsApp Crear Usuario');
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`, '_blank');
  };

  return (
    <main className="lp-root">
      <div className="lp-bg" />
      <div className="lp-dots" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => <span key={i} className={`lp-dot d${i}`} />)}
      </div>

      <section className="lp-hero">
        <Image src="/logo.png" alt="Ganamos.net" width={410} height={58} priority className="lp-logo" />

        <div className="lp-badge">
          <Sparkle />
          <span>PLATAFORMA ORIGINAL<br />LA QUE PAGA</span>
          <Sparkle />
        </div>

        <button className="lp-cta" onClick={handleClick}>
          <UsersIcon />
          <span>CREAR USUARIO</span>
          <UsersIcon />
        </button>
        <p className="lp-cta-sub">✓ Click para activar tu bono instantáneo ✓</p>

        <p className="lp-pct">15%</p>
        <h1 className="lp-title">BONO EN TU PRIMERA Y SEGUNDA CARGA</h1>
        <p className="lp-yellow">Más saldo para jugar desde tu primera carga</p>
        <p className="lp-desc">
          Comunicate con nosotros para que te creemos tu usuario en nuestra plataforma original
        </p>

        <div className="lp-info">
          <span className="lp-live" />
          Te respondemos al instante por WhatsApp
        </div>
      </section>

      <section className="lp-pagos">
        <p className="lp-pagos-title">MÉTODOS DE PAGO ACEPTADOS</p>
        <div className="lp-pagos-row">
          {PAGOS.map(p => (
            <div key={p.label} className="lp-pago">
              <span className="lp-pago-ico" style={{ background: p.color }}>{p.letter}</span>
              {p.label}
            </div>
          ))}
        </div>
        <p className="lp-disclaimer">+18 · Jugá con responsabilidad · Sujeto a términos y condiciones</p>
      </section>
    </main>
  );
}
