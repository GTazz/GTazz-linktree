import { useState, useEffect } from 'react'


const LANGUAGES = {
  en: {
    aboutTitle: "ABOUT ME",
    aboutDescription: "Hi, I'm a software developer. Coding, learning, teaching, and problem-solving are my passions.",
    contactTitle: "CONTACT",
    contactEmail: "Email",
    contactPhone: "Phone",
    linksTitle: "LINKS"
  },
  pt: {
    aboutTitle: "SOBRE MIM",
    aboutDescription: "Oi, sou desenvolvedor de software. Programar, aprender, ensinar e solucionar são minhas paixões.",
    contactTitle: "CONTATO",
    contactEmail: "Email",
    contactPhone: "Telefone",
    linksTitle: "LINKS"
  }
};

const getLanguagePreference = () => {
  const userLang = navigator.language || navigator.userLanguage;
  return userLang.startsWith('pt') ? LANGUAGES.pt : LANGUAGES.en;
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
