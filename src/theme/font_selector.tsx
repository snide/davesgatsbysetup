import React, { FunctionComponent } from 'react';
import { useFetchFonts } from '../services/fetch_fonts';
import { withTheme } from '@emotion/react';
import { ThemeTokens } from './theme';

type FontSelectorProps = {
  // TODO: figure out what type of event this is
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  theme: ThemeTokens;
};

const _FontSelector: FunctionComponent<FontSelectorProps> = ({
  onChange,
  theme,
}) => {
  // use your own hook to load the data you need
  const { fonts, loading, error } = useFetchFonts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <select onChange={onChange} value={theme.fontFamily}>
      {fonts &&
        fonts.length > 0 &&
        fonts.map((font: any) => (
          <option key={font.family}>{font.family}</option>
        ))}
    </select>
  );
};

export const FontSelector = withTheme(_FontSelector);
