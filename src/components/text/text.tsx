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
    font-size: ${theme.fontSize}px;
    line-height: ${theme.lineHeight};

    p:not(:last-of-type) {
      margin-bottom: ${theme.sizeL}px;
    }

    p:first-of-type:first-letter {
      font-size: ${theme.fontSizeXXL * 2}px;
      line-height: ${theme.fontSizeXXL * 1.9}px;
      float: left;
      padding-right: ${theme.sizeS}px;
    }
    a {
      background-color: transparent;
      color: inherit;
      text-decoration: none;
      transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
      border-bottom: ${theme.sizeXS / 2}px solid ${theme.colorPrimary};
      box-shadow: inset 0 -${theme.sizeXS / 2}px 0 ${theme.colorPrimary};
      overflow-wrap: break-word;
      word-break: break-word;
      word-wrap: break-word;

      &:hover {
        border-bottom: ${theme.sizeXS / 2}px solid ${theme.colorAccent};
        box-shadow: inset 0 -${theme.sizeXS / 2}px 0 ${theme.colorAccent};
        color: ${readableColor(
          theme.colorEmptyShade,
          theme.colorInk,
          theme.colorGhost
        )};
      }
    }
  `;

  return <div css={styleText}>{children}</div>;
};

export const Text = withTheme(_Text);
