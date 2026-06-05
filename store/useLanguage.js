import { create } from "zustand";
import { persist } from "zustand/middleware";

import en from "../locales/en.json";
import de from "../locales/de.json";

const translations = { en, de };

// language store
export const useLanguageStore = create(
  persist(
    (set, get) => ({
      lang: "de",

      setLang: (lang) => set({ lang }),

      t: (key) => {
        const { lang } = get();
        return translations[lang]?.[key] || key;
      },
    }),
    {
      name: "language-storage",
    },
  ),
);
