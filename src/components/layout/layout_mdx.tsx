/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';

type PageProps = {
  theme: ThemeTokens;
};

export const _Pages: FunctionComponent<PageProps> = ({ theme, children }) => {
  const mdxLayout = css`
    h3 {
      font-size: ${theme.fontSizeXL}px;
    }
  `;

  return <div css={mdxLayout}>{children}</div>;
};

export default withTheme(_Pages);
