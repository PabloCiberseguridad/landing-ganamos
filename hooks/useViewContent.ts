'use client';
// hooks/useViewContent.ts
// Dispara ViewContent cuando el usuario scrollea a una sección

import { useEffect, useRef } from 'react';
import { trackViewContent } from '@/lib/pixel';

/**
 * Usa este hook en cada sección clave de la landing.
 * Dispara ViewContent una sola vez cuando el 40% de la sección es visible.
 *
 * @example
 * const ref = useViewContent('Beneficios');
 * return <section ref={ref}>...</section>
 */
export function useViewContent(sectionName: string) {
  const ref = useRef<HTMLElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          trackViewContent(sectionName);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
