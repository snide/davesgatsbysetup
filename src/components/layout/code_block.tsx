/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';
import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';

type CodeBlockProps = {
  theme: ThemeTokens;
  className: string;
  children: string;
};

const prismTheme: PrismTheme = {
  plain: {
    color: '#F8F8F2',
    backgroundColor: '#282A36',
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(189, 147, 249)',
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: 'rgb(80, 250, 123)',
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
        color: 'rgb(248, 248, 242)',
      },
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: 'rgb(255, 121, 198)',
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: 'rgb(189, 147, 249)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(98, 114, 164)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(241, 250, 140)',
      },
    },
  ],
};

export const _CodeBlock: FunctionComponent<CodeBlockProps> = ({
  theme,
  children,
  className,
}) => {
  const language: any = className.replace(/language-/, '') || '';
  const styleCodeBlock = css`
    padding: ${theme.size}px;
  `;

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
