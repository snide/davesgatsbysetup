/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { ThemeTokens } from '../theme/theme';
import { css, jsx } from '@emotion/core';
import { darken } from 'polished';
import { Helmet } from 'react-helmet';

type indexPageProps = {
  theme: ThemeTokens;
};

const IndexPage: FunctionComponent<indexPageProps> = props => {
  const { theme } = props;

  const primaryDarkenedHex = darken(0.2, theme.primary)!;
  const bold = css`
    font-weight: 700;
  `;
  const primary = css`
    color: ${theme.primary};
  `;
  const secondary = css`
    color: ${theme.secondary};
  `;
  const accent = css`
    color: ${theme.accent};
  `;
  const primaryDarkened = css`
    color: ${darken(0.2, theme.primary)};
  `;

  return (
    <div>
      <Helmet title="Index page title" defer={false} />
      <h4>Index page uses the parent theme</h4>
      <ul>
        <li css={[primary, bold]}>The primary color is {theme.primary}</li>
        <li css={[secondary, bold]}>
          The secondary color is {theme.secondary}
        </li>
        <li css={[accent, bold]}>The accent color is {theme.accent}</li>
        <li css={[primaryDarkened, bold]}>
          Using polished, the primary color of{' '}
          <span css={primary}>{theme.primary}</span> is darkened to{' '}
          {primaryDarkenedHex}
        </li>
      </ul>

      <p>
        <Link to="/test/">MDX page</Link>
      </p>
    </div>
  );
};

export default withTheme(IndexPage);
