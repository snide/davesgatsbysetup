import { hsl, parseToHsl, getContrast } from 'polished';
import { ThemeTokens } from './theme';

export const generateTheme = (
  primary: string,
  secondary: string,
  accent: string,
  fontFamily: string,
  fontFamilyTitle: string,
  fontFamilyCode: string,
  size: number,
  borderRadius: number
) => {
  const colorPrimary = primary;
  const colorSecondary: string = secondary;
  const colorAccent = accent;
  const hsv = parseToHsl(primary);

  let shadeScale = [
    { saturation: 0.1, lightness: 0.98 },
    { saturation: 0.33, lightness: 0.97 },
    { saturation: 0.28, lightness: 0.86 },
    { saturation: 0.15, lightness: 0.65 },
    { saturation: 0.09, lightness: 0.45 },
    { saturation: 0.11, lightness: 0.23 },
    { saturation: 0.05, lightness: 0.05 },
  ];

  let mode = 'light';

  if (getContrast(colorPrimary, '#000') >= getContrast(colorPrimary, '#FFF')) {
    shadeScale = [
      { saturation: 0.11, lightness: 0.13 },
      { saturation: 0.11, lightness: 0.16 },
      { saturation: 0.11, lightness: 0.23 },
      { saturation: 0.11, lightness: 0.36 },
      { saturation: 0.15, lightness: 0.65 },
      { saturation: 0.25, lightness: 0.86 },
      { saturation: 0, lightness: 0 },
    ];

    mode = 'dark';
  }

  const colorGhost = '#FFFFFF';
  const colorInk = '#000000';
  const colorEmptyShade = hsl({
    hue: hsv.hue,
    saturation: shadeScale[0].saturation,
    lightness: shadeScale[0].lightness,
  });
  const colorLightestShade = hsl({
    hue: hsv.hue,
    saturation: shadeScale[1].saturation,
    lightness: shadeScale[1].lightness,
  });
  const colorLightShade = hsl({
    hue: hsv.hue,
    saturation: shadeScale[2].saturation,
    lightness: shadeScale[2].lightness,
  });
  const colorMediumShade = hsl({
    hue: hsv.hue,
    saturation: shadeScale[3].saturation,
    lightness: shadeScale[3].lightness,
  });
  const colorDarkShade = hsl({
    hue: hsv.hue,
    saturation: shadeScale[4].saturation,
    lightness: shadeScale[4].lightness,
  });
  const colorDarkestShade = hsl({
    hue: hsv.hue,
    saturation: shadeScale[5].saturation,
    lightness: shadeScale[5].lightness,
  });
  const colorFullShade = hsl({
    hue: hsv.hue,
    saturation: shadeScale[6].saturation,
    lightness: shadeScale[6].lightness,
  });

  const theme: ThemeTokens = {
    mode: mode,
    color: {
      primary: colorPrimary,
      secondary: colorSecondary,
      accent: colorAccent,
      ghost: colorGhost,
      ink: colorInk,
      emptyShade: colorEmptyShade,
      lightestShade: colorLightestShade,
      lightShade: colorLightShade,
      mediumShade: colorMediumShade,
      darkShade: colorDarkShade,
      darkestShade: colorDarkestShade,
      fullShade: colorFullShade,
    },
    base: size,
    size: {
      xs: size * 0.25,
      s: size * 0.5,
      m: size * 0.75,
      base: size,
      l: size * 1.5,
      xl: size * 2,
      xxl: size * 2.5,
    },
    border: {
      radius: borderRadius,
    },
    font: {
      lineHeightMultiplier: 1.5,
      weight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      size: {
        xxxs: 0.5625 * size,
        xxs: 0.6875 * size,
        xs: 0.75 * size,
        s: 0.875 * size,
        m: 1 * size,
        l: 1.25 * size,
        xl: 1.75 * size,
        xxl: 2.125 * size,
      },
      family: {
        regular: fontFamily,
        title: fontFamilyTitle,
        code: fontFamilyCode,
      },
    },
  };

  return theme;
};
