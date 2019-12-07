import React, {
  ReactNode,
  Fragment,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react';
import { useTheme, ThemeTokens, THEME_TOKENS, THEME_TOKENS_KEY } from './theme';
import { generateTheme } from '../theme/generate_theme';
import { FontSelector } from './font_selector';

export const themeSelector = (): [
  ReactNode,
  ThemeTokens,
  Dispatch<SetStateAction<ThemeTokens>>
] => {
  const [themeTokens, setStoredThemeTokens] = useTheme();

  const tokenColorsThatAreEditable = [
    'colorPrimary',
    'colorSecondary',
    'colorAccent',
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setStoredThemeTokens({ ...themeTokens, [name]: value });
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.currentTarget;
    setStoredThemeTokens({ ...themeTokens, ['fontFamily']: value });
  };

  const handleResetTheme = () => {
    localStorage.removeItem(THEME_TOKENS_KEY);
    setStoredThemeTokens(THEME_TOKENS);
  };

  useLayoutEffect(() => {
    setStoredThemeTokens(
      generateTheme(
        themeTokens.colorPrimary,
        themeTokens.colorSecondary,
        themeTokens.colorAccent,
        themeTokens.fontFamily,
        themeTokens.size,
        themeTokens.borderSize
      )
    );
  }, [
    themeTokens.colorPrimary,
    themeTokens.colorSecondary,
    themeTokens.colorAccent,
    themeTokens.fontFamily,
    themeTokens.size,
    themeTokens.borderSize,
  ]);

  const themeInputs: ReactElement[] = [];

  for (const [key, value] of Object.entries(themeTokens)) {
    if (key.startsWith('color')) {
      themeInputs.push(
        <div key={key}>
          <input
            id={key}
            name={key}
            type="color"
            value={value}
            onChange={handleInputChange}
            disabled={!tokenColorsThatAreEditable.includes(key)}
          />
          <label htmlFor={key}>{key}</label>
        </div>
      );
    }
  }

  const themeControls = (
    <Fragment>
      <FontSelector onChange={handleFontChange} />
      {themeInputs}
      <button onClick={handleResetTheme}>Reset</button>
    </Fragment>
  );

  return [themeControls, themeTokens, setStoredThemeTokens];
};
