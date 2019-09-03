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
};

export const THEME_TOKENS_KEY = 'theme.tokens';

export const THEME_TOKENS = generateTheme('#006BB4', '#017D73', '#DD0A73');

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
