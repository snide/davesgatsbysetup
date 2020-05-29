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
      font-size: ${theme.fontSizeXL}px;
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
    margin-bottom: ${theme.fontSize}px;
    line-height: 1.5;
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
    font-family: ${theme.fontFamilyTitle};
    margin-top: 0;
    margin-bottom: ${theme.fontSizeXS}px;
  }

  h1 {
    font-size: ${theme.fontSizeXXL}px;
    line-height: 1.333333;
    font-weight: ${theme.fontWeightBold};
  }

  h2 {
    font-size: ${theme.fontSizeXL}px;
    line-height: 1.428571;
    font-weight: ${theme.fontWeightBold};
  }

  h3 {
    font-size: ${theme.fontSizeL}px;
    line-height: 1.6;
    font-weight: ${theme.fontWeightBold};
  }

  h4 {
    margin-bottom: ${theme.fontSize}px;
    line-height: 1.5;
    font-weight: ${theme.fontWeightBold};
  }

  h5 {
    margin-bottom: ${theme.fontSize}px;
    line-height: 1.142857;
    font-weight: ${theme.fontWeightBold};
  }

  h6 {
    margin-bottom: ${theme.fontSizeS}px;
    line-height: 1.333333em;
    text-transform: uppercase;
    font-weight: ${theme.fontWeightBold};
  }

  h1,
  h2 {
    padding-bottom: ${theme.sizeL}px;
  }

  // 3. Images
  img {
    width: 100%;
    box-sizing: content-box;
    border-style: none;
  }

  // 4. Blockquotes
  blockquote {
    padding: 0 ${theme.size}px;
    border-left: ${theme.sizeXS}px solid ${theme.colorLightShade};
  }

  // 5. Horizontal rules
  hr {
    overflow: hidden;
    background: transparent;
    height: 2px;
    padding: 0;
    margin: ${theme.sizeXL}px 0;
    background-color: ${theme.colorLightShade};
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

    padding-left: ${theme.sizeL}px;
    margin-top: 0;
    margin-bottom: ${theme.size}px;
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
    margin-bottom: ${theme.sizeXS}px;
  }

  li + li {
    margin-top: ${theme.sizeXS}px;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item + .task-list-item {
    margin-top: ${theme.sizeXS};
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
    border-left: 1px solid ${theme.colorLightShade};
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0;
  }

  table th,
  table td {
    padding: ${theme.sizeXS}px ${theme.sizeS}px;
    border-top: 1px solid ${theme.colorLightShade};
    border-bottom: 1px solid ${theme.colorLightShade};

    &:last-child {
      border-right: 1px solid ${theme.colorLightShade};
    }
  }

  table tr {
    background-color: transparent;
    border-top: 1px solid ${theme.colorLightShade};
  }
}`;

  return (
    <MDXProvider components={components}>
      <div css={styleMdxLayout}>{children}</div>
    </MDXProvider>
  );
};

export default withTheme(_Pages);
