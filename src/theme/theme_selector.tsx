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

export const themeSelector = (): [
  ReactNode,
  ThemeTokens,
  Dispatch<SetStateAction<ThemeTokens>>
] => {
  const [themeTokens, setStoredThemeTokens] = useTheme();

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setStoredThemeTokens({ ...themeTokens, [name]: value });
  };

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
          />
          <label htmlFor={key}>{key}</label>
        </div>
      );
    }
  }

  const themeControls = (
    <Fragment>
      {themeInputs}
      <div>
        <label htmlFor="size">Size is {themeTokens.size}</label>
        <input
          name="size"
          id="size"
          type="number"
          value={themeTokens.size}
          min={10}
          max={50}
          step={2}
          onChange={handleSizeChange}
        />
      </div>
      <div>
        <label htmlFor="borderSize">
          Border size is {themeTokens.borderSize}
        </label>
        <input
          name="borderSize"
          id="borderSize"
          type="number"
          value={themeTokens.borderSize}
          min={8}
          max={50}
          step={2}
          onChange={handleSizeChange}
        />
      </div>
      <button onClick={handleResetTheme}>Reset</button>
    </Fragment>
  );

  return [themeControls, themeTokens, setStoredThemeTokens];
};
