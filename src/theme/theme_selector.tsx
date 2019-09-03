import React, {
  ReactNode,
  Fragment,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
  ReactNodeArray,
} from 'react';
import { useTheme, ThemeTokens, THEME_TOKENS, THEME_TOKENS_KEY } from './theme';
import { generateTheme } from '../theme/generate_theme';

export const themeSelector = (): [
  ReactNode,
  ThemeTokens,
  Dispatch<SetStateAction<ThemeTokens>>
] => {
  const [themeTokens, setStoredThemeTokens] = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setStoredThemeTokens({ ...themeTokens, [name]: value });
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
        themeTokens.colorAccent
      )
    );
  }, [
    themeTokens.colorPrimary,
    themeTokens.colorSecondary,
    themeTokens.colorAccent,
  ]);

  const themeInputs: ReactNodeArray = [];

  for (const [key, value] of Object.entries(themeTokens)) {
    if (key) {
      themeInputs.push(
        <div key={key}>
          <input
            id={key}
            name={key}
            type="color"
            value={value}
            onChange={handleInputChange}
          />
          <label htmlFor={key}>{key}</label>
        </div>
      );
    }
  }

  const themeControls = (
    <Fragment>
      {themeInputs}
      <button onClick={handleResetTheme}>Reset</button>
    </Fragment>
  );

  return [themeControls, themeTokens, setStoredThemeTokens];
};
