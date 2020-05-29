/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';
import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';
import { lighten } from 'polished';

type CodeBlockProps = {
  theme: ThemeTokens;
  className: string;
  children: string;
};

export const _CodeBlock: FunctionComponent<CodeBlockProps> = ({
  theme,
  children,
  className,
}) => {
  const language: any =
    className !== undefined ? className.replace(/language-/, '') : '';
  const styleCodeBlock = css`
    padding: ${theme.size}px;
    background: ${theme.colorLightestShade};
    border-radius: ${theme.borderRadius}px;
    font-family: ${theme.fontFamilyCode};
    line-height: 1.3;
    font-size: ${theme.fontSizeS}px;
  `;

  const prismTheme: PrismTheme = {
    plain: {
      color: theme.colorDarkestShade,
      backgroundColor: theme.colorLightestShade,
    },
    styles: [
      {
        types: ['prolog', 'constant', 'builtin'],
        style: {
          color: lighten(0.2, theme.colorAccent),
        },
      },
      {
        types: ['inserted', 'function'],
        style: {
          color: theme.colorAccent,
        },
      },
      {
        types: ['deleted'],
        style: {
          color: 'rgb(255, 85, 85)',
        },
      },
      {
        types: ['changed'],
        style: {
          color: 'rgb(255, 184, 108)',
        },
      },
      {
        types: ['punctuation', 'symbol'],
        style: {
          color: theme.colorDarkShade,
        },
      },
      {
        types: ['char', 'selector', 'script'],
        style: {
          color: theme.colorDarkestShade,
        },
      },
      {
        types: ['tag', 'string'],
        style: {
          color: theme.colorSecondary,
        },
      },
      {
        types: ['keyword', 'variable'],
        style: {
          color: theme.colorPrimary,
        },
      },
      {
        types: ['comment'],
        style: {
          color: theme.colorMediumShade,
        },
      },
      {
        types: ['operator'],
        style: {
          color: theme.colorAccent,
        },
      },
      {
        types: ['attr-name'],
        style: {
          color: lighten(0.2, theme.colorSecondary),
        },
      },
    ],
  };

  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      code={children.trim()}
      language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} css={styleCodeBlock}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export const CodeBlock = withTheme(_CodeBlock);
