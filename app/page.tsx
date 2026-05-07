'use client';
// app/page.tsx — Ganamos.net Squeeze Page v2

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { trackWhatsAppLead, trackViewContent } from '@/lib/pixel';
import { WA_NUMBER } from '@/lib/whatsapp';

export default function Home() {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    trackViewContent('Contacto');
  }, []);

  const handleClick = () => {
    trackWhatsAppLead('WhatsApp Hero');
    const msg = encodeURIComponent(
      nombre.trim()
        ? `Hola! Mi nombre es ${nombre.trim()} y quiero reclamar mi bono del 15% en Ganamos 🎰`
        : `Hola! Quiero reclamar mi bono del 15% en Ganamos 🎰`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <main className="squeeze-root">
      <div className="sq-bg" />
      <div className="sq-glow sq-glow-top" />
      <div className="sq-glow sq-glow-bottom" />

      <div className="squeeze-card">

        <div className="sq-logo-wrap">
          <Image
            src="/logo.png"
            alt="Ganamos.net"
            width={420}
            height={120}
            priority
            className="sq-logo"
          />
        </div>

        <div className="sq-headline-wrap">
          <p className="sq-acceso">ACCESO VIP EXCLUSIVO</p>
          <div className="sq-bono-wrap">
            <p className="sq-bono-label">BONO</p>
            <p className="sq-bono-num">15<span className="sq-bono-pct">%</span></p>
          </div>
        </div>

        <div className="sq-cta-label">
          ESCRIBINOS APRETANDO EL BOTÓN DE ABAJO
        </div>

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleClick()}
          className="sq-input"
          maxLength={40}
        />

        <button className="sq-wa-btn" onClick={handleClick}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.12 1.524 5.855L0 24l6.335-1.524A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.368l-.36-.214-3.727.977.995-3.638-.235-.374A9.818 9.818 0 112 12c0-5.422 4.396-9.818 9.818-9.818 5.423 0 9.819 4.396 9.819 9.818 0 5.423-4.396 9.818-9.819 9.818z"/>
          </svg>
          <span>OBTENER MI BONO<br />AHORA</span>
        </button>

        <p className="sq-disclaimer">
          +18 · Jugá con responsabilidad · Sujeto a términos y condiciones
        </p>

      </div>
    </main>
  );
}
