/** @jsx jsx */
import React, {
  ReactNode,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
  ReactElement,
  useState,
} from 'react';
import { css, jsx } from '@emotion/react';
import { useTheme, ThemeTokens, THEME_TOKENS, THEME_TOKENS_KEY } from './theme';
import { generateTheme } from '../theme/generate_theme';
import { FontSelector } from './font_selector';
import { InputColor } from '../components/forms/input_color';
import { Button } from '../components/button/button';

export const themeSelector = (): [
  ReactNode,
  ThemeTokens,
  Dispatch<SetStateAction<ThemeTokens>>
] => {
  const [theme, setStoredTheme] = useTheme();
  const [themeIsOpen, setThemeIsOpen] = useState(false);

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
    setStoredTheme({ ...theme, ['secondFontFamily']: value });
  };

  const handleFontTitleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = e.currentTarget;
    setStoredTheme({ ...theme, ['fontFamilyTitle']: value });
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
        theme.fontFamilyTitle,
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

  const styleThemeSelector = css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: ${theme.colorEmptyShade};
    padding: ${theme.sizeXL}px;
  `;

  for (const [key, value] of Object.entries(theme)) {
    if (key.startsWith('color')) {
      themeInputs.push(
        <div key={key}>
          <InputColor
            id={key}
            name={key}
            value={value}
            onChange={handleInputChange}
            disabled={!tokenColorsThatAreEditable.includes(key)}
            label={key}
          />
        </div>
      );
    }
  }

  let themeControls = (
    <Button
      color="primary"
      fill
      onClick={() => setThemeIsOpen(!themeIsOpen)}
      text="Change theme"
    />
  );
  if (themeIsOpen) {
    themeControls = (
      <div css={styleThemeSelector}>
        <FontSelector onChange={handleFontChange} font={theme.fontFamily} />
        <FontSelector
          onChange={handleFontTitleChange}
          font={theme.fontFamilyTitle}
        />
        <div css={styleThemeInputsList}>{themeInputs}</div>
        <div>
          <label htmlFor="size">Size is {theme.size}</label>
          <input
            name="size"
            id="size"
            type="range"
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
            type="range"
            value={theme.borderRadius}
            min={0}
            max={100}
            step={1}
            onChange={handleSizeChange}
          />
        </div>
        <Button onClick={handleResetTheme} text="Reset" color="accent" fill />
        <Button
          onClick={() => setThemeIsOpen(!themeIsOpen)}
          text="Close theme"
          color="primary"
        />
      </div>
    );
  }

  return [themeControls, theme, setStoredTheme];
};
