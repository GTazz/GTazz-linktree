import { useState, useEffect } from 'react'


const LANGUAGES = {
  en: {
    aboutTitle: "ABOUT ME",
    aboutDescription: "Hi, I'm a software developer. Coding, learning, teaching, and problem-solving are my passions.",
    contactTitle: "CONTACT",
    contactEmail: "Email",
    contactPhone: "Phone",
    linksTitle: "LINKS",
    // Popup messages
    emailCopied: "Email copied!",
    phoneCopied: "Phone copied!",
    clickToCopy: "Click to copy"
  },
  pt: {
    aboutTitle: "SOBRE MIM",
    aboutDescription: "Oi, sou desenvolvedor de software. Programar, aprender, ensinar e solucionar são minhas paixões.",
    contactTitle: "CONTATO",
    contactEmail: "Email",
    contactPhone: "Telefone",
    linksTitle: "LINKS",
    // Popup messages
    emailCopied: "Email copiado!",
    phoneCopied: "Telefone copiado!",
    clickToCopy: "Clique para copiar"
  }
};

const getLanguagePreference = () => {
  let userLang = navigator.language || navigator.userLanguage;
  userLang = userLang.toLowerCase();
  const userLangFull = userLang.replace('-', '_'); // Get the language code (e.g., "en_us", "pt_br")
  const userLangTrunc = userLang.split('-')[0]; // Get the language code (e.g., "en", "pt")

  return LANGUAGES[userLangFull] || LANGUAGES[userLangTrunc] || LANGUAGES.en;
};

const useLanguage = () => {
  const [langTexts, setLanguage] = useState(getLanguagePreference());

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(getLanguagePreference());
    };

    window.addEventListener('languagechange', handleLanguageChange);

    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  return langTexts;
};

export default useLanguage;
