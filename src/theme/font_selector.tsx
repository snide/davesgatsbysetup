import React, { FunctionComponent } from 'react';
import { useFetchFonts } from '../services/fetch_fonts';

type FontSelectorProps = {
  // TODO: figure out what type of event this is
  onChange: any;
};

export const FontSelector: FunctionComponent<FontSelectorProps> = ({
  onChange,
}) => {
  // use your own hook to load the data you need
  const { fonts, loading, error } = useFetchFonts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <select onChange={onChange}>
      {fonts &&
        fonts.length > 0 &&
        fonts.map((font: any) => (
          <option key={font.family}>{font.family}</option>
        ))}
    </select>
  );
};
