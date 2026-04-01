import React, { createContext, useContext, useState } from 'react';
import { translations, type Lang } from '../translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: (section, key) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>('fr');

  const t = (section: string, key: string): string => {
    return translations[lang]?.[section]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
