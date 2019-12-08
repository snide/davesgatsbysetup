/** @jsx jsx */
import React, {
  ReactNode,
  Fragment,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
  ReactElement,
} from 'react';
import { css, jsx } from '@emotion/react';
import { useTheme, ThemeTokens, THEME_TOKENS, THEME_TOKENS_KEY } from './theme';
import { generateTheme } from '../theme/generate_theme';
import { FontSelector } from './font_selector';

export const themeSelector = (): [
  ReactNode,
  ThemeTokens,
  Dispatch<SetStateAction<ThemeTokens>>
] => {
  const [theme, setStoredTheme] = useTheme();

  const tokenColorsThatAreEditable = [
    'colorPrimary',
    'colorSecondary',
    'colorAccent',
  ];

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setStoredTheme({ ...theme, [name]: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    setStoredTheme({ ...theme, [name]: value });
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.currentTarget;
    setStoredTheme({ ...theme, ['fontFamily']: value });
  };

  const handleResetTheme = () => {
    localStorage.removeItem(THEME_TOKENS_KEY);
    setStoredTheme(THEME_TOKENS);
  };

  useLayoutEffect(() => {
    setStoredTheme(
      generateTheme(
        theme.colorPrimary,
        theme.colorSecondary,
        theme.colorAccent,
        theme.fontFamily,
        theme.size,
        theme.borderRadius
      )
    );
  }, [
    theme.colorPrimary,
    theme.colorSecondary,
    theme.colorAccent,
    theme.fontFamily,
    theme.size,
    theme.borderRadius,
  ]);

  const themeInputs: ReactElement[] = [];

  const styleThemeInputsList = css`
    > * {
      padding-bottom: ${theme.sizeS}px;
    }
  `;

  const styleColorPicker = css`
    border-radius: ${theme.borderRadius}px;
    height: ${theme.sizeL}px;
    width: ${theme.sizeL}px;
    border: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    &::-webkit-color-swatch {
      border: none;
      border-radius: ${theme.borderRadius}px;
    }
  `;

  for (const [key, value] of Object.entries(theme)) {
    if (key.startsWith('color')) {
      themeInputs.push(
        <div key={key}>
          <input
            css={styleColorPicker}
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
      <div css={styleThemeInputsList}>{themeInputs}</div>
      <div>
        <label htmlFor="size">Size is {theme.size}</label>
        <input
          name="size"
          id="size"
          type="number"
          value={theme.size}
          min={10}
          max={50}
          step={2}
          onChange={handleSizeChange}
        />
      </div>
      <div>
        <label htmlFor="borderRadius">
          Border size is {theme.borderRadius}
        </label>
        <input
          name="borderRadius"
          id="borderRadius"
          type="number"
          value={theme.borderRadius}
          min={0}
          max={100}
          step={1}
          onChange={handleSizeChange}
        />
      </div>
      <button onClick={handleResetTheme}>Reset</button>
    </Fragment>
  );

  return [themeControls, theme, setStoredTheme];
};
