'use client';
// components/WAButton.tsx
// Botón de WhatsApp reutilizable con tracking automático del Pixel

import { trackWhatsAppLead } from '@/lib/pixel';
import { buildWALink, WA_PIXEL_NAMES, WAButtonKey } from '@/lib/whatsapp';

interface WAButtonProps {
  buttonKey: WAButtonKey;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function WAButton({
  buttonKey,
  label = '💬 Escribinos por WhatsApp',
  className = '',
  size = 'lg',
}: WAButtonProps) {
  const link = buildWALink(buttonKey);
  const pixelName = WA_PIXEL_NAMES[buttonKey];

  const handleClick = () => {
    // ✅ EVENTO PRINCIPAL: Lead — cada clic a WhatsApp
    trackWhatsAppLead(pixelName);
  };

  const sizeClasses = {
    sm:  'wa-btn wa-btn-sm',
    md:  'wa-btn wa-btn-md',
    lg:  'wa-btn wa-btn-lg',
    xl:  'wa-btn wa-btn-xl',
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${sizeClasses[size]} ${className}`}
      aria-label={`Abrir WhatsApp: ${label}`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.12 1.524 5.855L0 24l6.335-1.524A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.368l-.36-.214-3.727.977.995-3.638-.235-.374A9.818 9.818 0 112 12c0-5.422 4.396-9.818 9.818-9.818 5.423 0 9.819 4.396 9.819 9.818 0 5.423-4.396 9.818-9.819 9.818z"/>
      </svg>
      {label}
    </a>
  );
}
