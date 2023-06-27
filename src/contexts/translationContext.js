import React from 'react';

export const TranslationContext = React.createContext();

export const translations = {
  en: {
    greeting: 'Hello World, I am',
  },
  fa: {
    greeting: 'سلام دنیا، من',
  },
};