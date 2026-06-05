'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/store/useLanguage';

/**
 * Rehydrates the language store from localStorage after mount.
 * Required when persist uses skipHydration to prevent SSR/client text mismatches.
 */
export default function LanguageHydration() {
  useEffect(() => {
    useLanguageStore.persist.rehydrate();
  }, []);

  return null;
}
