/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from './code_block';

type PageProps = {
  theme: ThemeTokens;
};

const components = {
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
};

export const _Pages: FunctionComponent<PageProps> = ({ theme, children }) => {
  const styleMdxLayout = css`
    h3 {
      font-size: ${theme.font.size.xl}px;
    }
  > *:first-child {
    margin-top: 0 !important;
  }

  > *:last-child {
    margin-bottom: 0 !important;
  }


  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin-top: 0;
    margin-bottom: ${theme.size.base}px;
    line-height: ${theme.font.lineHeightMultiplier};
  }

  p {
    font-size: ${theme.font.size.l}px;
    line-height: ${theme.font.lineHeightMultiplier * 1.2};
    margin-bottom: ${theme.size.xl}px;
  }

  strong {
    font-weight: 600;
  }

  // 2. Headings
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.font.family.title};
    margin-top: 0;
    margin-bottom: ${theme.font.size.xs}px;
  }

  h1 {
    font-size: ${theme.font.size.xxl}px;
    line-height: 1.333333;
    font-weight: ${theme.font.weight.bold};
  }

  h2 {
    font-size: ${theme.font.size.xl}px;
    line-height: 1.428571;
    font-weight: ${theme.font.weight.bold};
  }

  h3 {
    font-size: ${theme.font.size.l}px;
    line-height: 1.6;
    font-weight: ${theme.font.weight.bold};
  }

  h4 {
    margin-bottom: ${theme.size.base}px;
    line-height: 1.5;
    font-weight: ${theme.font.weight.bold};
  }

  h5 {
    margin-bottom: ${theme.size.base}px;
    line-height: 1.142857;
    font-weight: ${theme.font.weight.bold};
  }

  h6 {
    margin-bottom: ${theme.size.base}px;
    line-height: 1.333333em;
    text-transform: uppercase;
    font-weight: ${theme.font.weight.bold};
  }

  h1,
  h2 {
    padding-bottom: ${theme.size.l}px;
  }

  // 3. Images
  img {
    width: 100%;
    box-sizing: content-box;
    border-style: none;
  }

  // 4. Blockquotes
  blockquote {
    padding: 0 ${theme.size.base}px;
    border-left: ${theme.size.xs}px solid ${theme.color.lightShade};
  }

  // 5. Horizontal rules
  hr {
    overflow: hidden;
    background: transparent;
    height: 2px;
    padding: 0;
    margin: ${theme.size.xl}px 0;
    background-color: ${theme.color.lightShade};
    border: none;
  }

  hr::before {
    display: table;
    content: '';
  }

  hr::after {
    display: table;
    clear: both;
    content: '';
  }

  // 6. Lists
  ul,
  ol {

    padding-left: ${theme.size.l}px;
    margin-top: 0;
    margin-bottom: ${theme.size.base}px;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  ul ul {
    list-style-type: circle;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: ${theme.size.xs}px;
  }

  li + li {
    margin-top: ${theme.size.xs}px;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item + .task-list-item {
    margin-top: ${theme.size.xs};
  }

  .task-list-item input {
    margin: 0 .2em .25em -1.6em;
    vertical-align: middle;
  }

  // 7. Tables
  table {
    display: block;
    width: 100%;
    overflow: auto;
    border-left: 1px solid ${theme.color.lightShade};
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0;
  }

  table th,
  table td {
    padding: ${theme.size.xs}px ${theme.size.s}px;
    border-top: 1px solid ${theme.color.lightShade};
    border-bottom: 1px solid ${theme.color.lightShade};

    &:last-child {
      border-right: 1px solid ${theme.color.lightShade};
    }
  }

  table tr {
    background-color: transparent;
    border-top: 1px solid ${theme.color.lightShade};
  }
}`;

  return (
    <MDXProvider components={components}>
      <div css={styleMdxLayout}>{children}</div>
    </MDXProvider>
  );
};

export default withTheme(_Pages);
