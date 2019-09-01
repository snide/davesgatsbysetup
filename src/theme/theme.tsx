import { Dispatch, SetStateAction, useState } from 'react';

export type ThemeTokens = {
  primary: string;
  secondary: string;
  accent: string;
};

export const THEME_TOKENS_KEY = 'theme.tokens';

export const THEME_TOKENS = {
  primary: '#006BB4',
  secondary: '#017D73',
  accent: '#DD0A73',
};

export const useTheme = (
  initialThemeTokens: ThemeTokens = JSON.parse(
    localStorage.getItem(THEME_TOKENS_KEY)!
  ) || THEME_TOKENS
  // TODO: figure out what type of action this is
): [ThemeTokens, Dispatch<SetStateAction<any>>] => {
  const setStoredThemeTokens = (tokens: ThemeTokens) => {
    setThemeTokens(tokens);
    localStorage.setItem(THEME_TOKENS_KEY, `${JSON.stringify(tokens)}`);
  };

  const [themeTokens, setThemeTokens] = useState<ThemeTokens>(
    initialThemeTokens
  );

  return [themeTokens, setStoredThemeTokens];
};
