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
    padding: ${theme.size.base}px;
    background: ${theme.color.lightestShade};
    border-radius: ${theme.border.radius}px;
    font-family: ${theme.font.family.code};
    line-height: 1.3;
    font-size: ${theme.font.size.s}px;
  `;

  const prismTheme: PrismTheme = {
    plain: {
      color: theme.color.darkestShade,
      backgroundColor: theme.color.lightestShade,
    },
    styles: [
      {
        types: ['prolog', 'constant', 'builtin'],
        style: {
          color: lighten(0.2, theme.color.accent),
        },
      },
      {
        types: ['inserted', 'function'],
        style: {
          color: theme.color.accent,
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
          color: theme.color.darkShade,
        },
      },
      {
        types: ['char', 'selector', 'script'],
        style: {
          color: theme.color.darkestShade,
        },
      },
      {
        types: ['tag', 'string'],
        style: {
          color: theme.color.secondary,
        },
      },
      {
        types: ['keyword', 'variable'],
        style: {
          color: theme.color.primary,
        },
      },
      {
        types: ['comment'],
        style: {
          color: theme.color.mediumShade,
        },
      },
      {
        types: ['operator'],
        style: {
          color: theme.color.accent,
        },
      },
      {
        types: ['attr-name'],
        style: {
          color: lighten(0.2, theme.color.secondary),
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
