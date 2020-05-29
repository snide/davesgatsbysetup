/** @jsx jsx */
import { FunctionComponent, ReactNode } from 'react';
import { css, jsx, withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';
import { Link } from 'gatsby';

type HeaderProps = {
  theme: ThemeTokens;
  themeControls: ReactNode;
};

const _Header: FunctionComponent<HeaderProps> = ({ theme, themeControls }) => {
  const styleHeader = css`
    padding: ${theme.sizeXL}px;
    margin-bottom: ${theme.sizeXL}px;
  `;

  const styleNav = css`
    display: flex;
    align-items: flex-end;
    font-size: ${theme.size}px;
    font-family: ${theme.fontFamilyTitle};

    > li + li {
      margin-left: ${theme.size}px;
    }
  `;

  const styleHeaderItems = css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  `;

  const styleTitle = css`
    font-weight: ${theme.fontWeightBold};
    font-size: ${theme.sizeL}px;
    margin-right: ${theme.sizeL}px;
  `;

  return (
    <header css={styleHeader}>
      <div css={styleHeaderItems}>
        <nav>
          <ul css={styleNav}>
            <li css={styleTitle}>
              <Link to="/">Internet Human</Link>
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
    </header>
  );
};

export const Header = withTheme(_Header);
