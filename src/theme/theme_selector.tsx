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

  const tokenColorsThatAreEditable = ['primary', 'secondary', 'accent'];

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    const updatedTheme = { ...theme };
    // @ts-ignore TODO: figure out how to assign type
    updatedTheme.size[name] = value;
    setStoredTheme(updatedTheme);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    const updatedTheme = { ...theme };
    // @ts-ignore TODO: figure out how to assign type
    updatedTheme.color[name] = value;
    setStoredTheme(updatedTheme);
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.currentTarget;
    const updatedTheme = { ...theme };
    updatedTheme.font.family.regular = value;
    setStoredTheme(updatedTheme);
  };

  const handleFontTitleChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = e.currentTarget;
    const updatedTheme = { ...theme };
    updatedTheme.font.family.title = value;
    setStoredTheme(updatedTheme);
  };

  const handleFontCodeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = e.currentTarget;
    const updatedTheme = { ...theme };
    updatedTheme.font.family.code = value;
    setStoredTheme(updatedTheme);
  };

  const handleResetTheme = () => {
    localStorage.removeItem(THEME_TOKENS_KEY);
    setStoredTheme(THEME_TOKENS);
  };

  useLayoutEffect(() => {
    setStoredTheme(
      generateTheme(
        theme.color.primary,
        theme.color.secondary,
        theme.color.accent,
        theme.font.family.regular,
        theme.font.family.title,
        theme.font.family.code,
        theme.size.base,
        theme.border.radius
      )
    );
  }, [
    theme.color.primary,
    theme.color.secondary,
    theme.color.accent,
    theme.font.family.regular,
    theme.font.family.title,
    theme.font.family.code,
    theme.size.base,
    theme.border.radius,
  ]);

  const themeInputs: ReactElement[] = [];

  const styleThemeInputsList = css`
    > * {
      padding-bottom: ${theme.size.s}px;
    }
  `;

  const styleThemeSelector = css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: ${theme.color.emptyShade};
    padding: ${theme.size.xl}px;
  `;

  for (const [key, value] of Object.entries(theme.color)) {
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
        <FontSelector
          onChange={handleFontChange}
          font={theme.font.family.regular}
        />
        <FontSelector
          onChange={handleFontTitleChange}
          font={theme.font.family.title}
        />
        <FontSelector
          onChange={handleFontCodeChange}
          font={theme.font.family.code}
        />
        <div css={styleThemeInputsList}>{themeInputs}</div>
        <div>
          <label htmlFor="size">Size is {theme.size.base}</label>
          <input
            name="base"
            id="base"
            type="range"
            value={theme.size.base}
            min={10}
            max={50}
            step={2}
            onChange={handleSizeChange}
          />
        </div>
        <div>
          <label htmlFor="borderRadius">
            Border size is {theme.border.radius}
          </label>
          <input
            name="border.radius"
            id="border.radius"
            type="range"
            value={theme.border.radius}
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
