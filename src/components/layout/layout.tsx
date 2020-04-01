/** @jsx jsx */
import { FunctionComponent } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';

type LayoutProps = {
  theme: ThemeTokens;
};

const _Layout: FunctionComponent<LayoutProps> = ({ theme, children }) => {
  const styleLayout = css`
    width: ${theme.size * 62}px;
    margin: auto;
    max-width: 61.8%;
  `;

  return <div css={styleLayout}>{children}</div>;
};

export const Layout = withTheme(_Layout);
