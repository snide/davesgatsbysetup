/** @jsx jsx */
import { FunctionComponent, ReactNode } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';
import { Link } from 'gatsby';
import { darken } from 'polished';
import { Layout } from '../layout/layout';

type HeaderProps = {
  theme: ThemeTokens;
  themeControls: ReactNode;
};

const _Header: FunctionComponent<HeaderProps> = ({ theme, themeControls }) => {
  const styleHeader = css`
    background: ${theme.mode === 'light'
      ? theme.colorGhost
      : darken(0.05, theme.colorEmptyShade)};
    padding: ${theme.sizeS}px;
  `;

  const styleNav = css`
    display: flex;
    align-items: center;
    font-size: ${theme.sizeM}px;

    > li + li {
      margin-left: ${theme.sizeS}px;
    }
  `;

  const styleHeaderItems = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const styleTitle = css`
    font-weight: ${theme.fontWeightBold};
    font-size: ${theme.size}px;
    margin-right: ${theme.sizeL}px;
  `;

  return (
    <header css={styleHeader}>
      <Layout>
        <div css={styleHeaderItems}>
          <nav>
            <ul css={styleNav}>
              <li css={styleTitle}>
                <Link to="/">Internet human</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          {themeControls}
        </div>
      </Layout>
    </header>
  );
};

export const Header = withTheme(_Header);
