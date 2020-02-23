import { Dispatch, SetStateAction, useState } from 'react';
import { generateTheme } from '../theme/generate_theme';

export type ThemeTokens = {
  colorPrimary: string;
  colorSecondary: string;
  colorAccent: string;
  colorGhost: string;
  colorInk: string;
  colorEmptyShade: string;
  colorLightestShade: string;
  colorLightShade: string;
  colorMediumShade: string;
  colorDarkShade: string;
  colorDarkestShade: string;
  colorFullShade: string;
  fontFamily: string;
  size: number;
  sizeXS: number;
  sizeS: number;
  sizeM: number;
  sizeL: number;
  sizeXL: number;
  sizeXXL: number;
  borderRadius: number;
  lineHeight: number;
  fontWeightBold: number;
  fontSize: number;
  fontSizeXS: number;
  fontSizeS: number;
  fontSizeM: number;
  fontSizeL: number;
  fontSizeXL: number;
  fontSizeXXL: number;
  mode: string;
};

export const THEME_TOKENS_KEY = 'theme.tokens';

export const THEME_TOKENS = generateTheme(
  '#b877db',
  '#20e193',
  '#df5375',
  'Merriweather',
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
