import { css } from '@emotion/core';
import { FONT_FAMILY, FONT_WEIGHT_REGULAR } from './constants';

type styleFontProps = {
  fontFamily: string;
  fontWeight: number;
};

export const styleFont = (
  props: styleFontProps = {
    fontFamily: FONT_FAMILY,
    fontWeight: FONT_WEIGHT_REGULAR,
  }
) => css`
  font-family: ${props.fontFamily};
  font-weight: ${props.fontWeight};
  letter-spacing: -0.005em;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-kerning: normal;
`;
