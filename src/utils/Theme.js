import { useState, useEffect } from 'react'


const CSS_VARIABLES = {
  balatro1: '--COLOR-background-1',
  balatro2: '--COLOR-background-2'
};

const getCSSVariables = (variableName) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

const useTheme = () => {

  const createThemeColors = () => {
    return Object.entries(CSS_VARIABLES).reduce((acc, [key, cssVar]) => {
      acc[key] = getCSSVariables(cssVar);
      return acc;
    }, {});
  };

  const [themeColors, setThemeColors] = useState(createThemeColors());

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = () => {
      setThemeColors(createThemeColors());
    };

    handleThemeChange(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return themeColors;
};

export default useTheme;
