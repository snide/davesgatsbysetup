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
  `;

  return (
    <MDXProvider components={components}>
      <div css={styleMdxLayout}>{children}</div>
    </MDXProvider>
  );
};

export default withTheme(_Pages);
