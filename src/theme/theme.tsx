import { Dispatch, SetStateAction, useState } from 'react';
import { generateTheme } from '../theme/generate_theme';

export interface ThemeTokens {
  color: {
    primary: string;
    secondary: string;
    accent: string;
    ghost: string;
    ink: string;
    emptyShade: string;
    lightestShade: string;
    lightShade: string;
    mediumShade: string;
    darkShade: string;
    darkestShade: string;
    fullShade: string;
  };
  base: number;
  size: {
    xs: number;
    s: number;
    m: number;
    base: number;
    l: number;
    xl: number;
    xxl: number;
  };
  border: {
    radius: number;
  };
  font: {
    lineHeightMultiplier: number;
    weight: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    size: {
      xxxs: number;
      xxs: number;
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
    };
    family: {
      regular: string;
      title: string;
      code: string;
    };
  };
  mode: string;
}

export const THEME_TOKENS_KEY = 'theme.tokens';

export const THEME_TOKENS = generateTheme(
  '#52c9db',
  '#e18411',
  '#df3ec3',
  'Merriweather',
  'Lato',
  'IBM Plex Mono',
  16,
  4
);

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

  const [themeTokens, setThemeTokens] =
    useState<ThemeTokens>(initialThemeTokens);

  return [themeTokens, setStoredThemeTokens];
};
