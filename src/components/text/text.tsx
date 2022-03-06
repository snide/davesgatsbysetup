/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';
import { readableColor } from 'polished';

type TextProps = {
  theme: ThemeTokens;
};

const _Text: FunctionComponent<TextProps> = ({ theme, children }) => {
  const styleText = css`
    font-size: ${theme.font.size.m}px;
    line-height: ${theme.font.lineHeightMultiplier};

    p:not(:last-of-type) {
      margin-bottom: ${theme.size.l}px;
    }

    p:first-of-type:first-letter {
      font-size: ${theme.font.size.xxl * 2}px;
      line-height: ${theme.font.size.xxl * 1.9}px;
      float: left;
      padding-right: ${theme.size.s}px;
    }
    a {
      background-color: transparent;
      color: inherit;
      text-decoration: none;
      transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
      border-bottom: ${theme.size.xs / 2}px solid ${theme.color.primary};
      box-shadow: inset 0 -${theme.size.xs / 2}px 0 ${theme.color.primary};
      overflow-wrap: break-word;
      word-break: break-word;
      word-wrap: break-word;

      &:hover {
        border-bottom: ${theme.size.xs / 2}px solid ${theme.color.accent};
        box-shadow: inset 0 -${theme.size.xs / 2}px 0 ${theme.color.accent};
        color: ${readableColor(
          theme.color.emptyShade,
          theme.color.ink,
          theme.color.ghost
        )};
      }
    }
  `;

  return <div css={styleText}>{children}</div>;
};

export const Text = withTheme(_Text);
