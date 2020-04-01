/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { useFetchFonts } from '../services/fetch_fonts';
import { withTheme } from '@emotion/react';
import { ThemeTokens } from './theme';
import { jsx, css } from '@emotion/react';

type FontSelectorProps = {
  // TODO: figure out what type of event this is
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  theme: ThemeTokens;
  font: string;
};

const _FontSelector: FunctionComponent<FontSelectorProps> = ({
  onChange,
  theme,
  font,
}) => {
  // use your own hook to load the data you need
  const { fonts, loading, error } = useFetchFonts();

  const styleSelect = css`
    display: inline-block;
    margin-bottom: ${theme.size}px;
  `;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <select onChange={onChange} value={font} css={styleSelect}>
      {fonts &&
        fonts.length > 0 &&
        fonts.map((font: any) => (
          <option key={font.family}>{font.family}</option>
        ))}
    </select>
  );
};

export const FontSelector = withTheme(_FontSelector);
