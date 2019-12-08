import { hsl, parseToHsl, getContrast } from 'polished';

export const generateTheme = (
  primary: string,
  secondary: string,
  accent: string,
  fontFamily: string,
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

  const theme = {
    colorPrimary: colorPrimary,
    colorSecondary: colorSecondary,
    colorAccent: colorAccent,
    colorGhost: colorGhost,
    colorInk: colorInk,
    colorEmptyShade: colorEmptyShade,
    colorLightestShade: colorLightestShade,
    colorLightShade: colorLightShade,
    colorMediumShade: colorMediumShade,
    colorDarkShade: colorDarkShade,
    colorDarkestShade: colorDarkestShade,
    colorFullShade: colorFullShade,
    fontFamily: fontFamily,
    size: size,
    sizeXS: size * 0.25,
    sizeS: size * 0.5,
    sizeM: size * 0.75,
    sizeL: size * 1.5,
    sizeXL: size * 2,
    sizeXXL: size * 2.5,
    borderRadius: borderRadius,
  };

  return theme;
};
