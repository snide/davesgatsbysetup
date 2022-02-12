/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { withTheme } from '@emotion/react';
import { ThemeTokens } from '../theme/theme';
import { css, jsx } from '@emotion/react';
import { darken } from 'polished';
import { Helmet } from 'react-helmet';
import { styleFont } from '../services/global_styling/typography/typography';

type indexPageProps = {
  theme: ThemeTokens;
};

const IndexPage: FunctionComponent<indexPageProps> = (props) => {
  const { theme } = props;

  const primaryDarkenedHex = darken(0.2, theme.colorPrimary)!;

  const bold = css`
    ${styleFont()};
  `;

  const primary = css`
    color: ${theme.colorPrimary};
  `;
  const secondary = css`
    color: ${theme.colorSecondary};
  `;
  const accent = css`
    color: ${theme.colorAccent};
  `;
  const primaryDarkened = css`
    color: ${darken(0.2, theme.colorPrimary)};
  `;

  return (
    <div>
      <Helmet title="Index page title" defer={false} />
      <h4>Index page uses the parent theme</h4>
      <ul>
        <li css={[primary, bold]}>The primary color is {theme.colorPrimary}</li>
        <li css={[secondary, bold]}>
          The secondary color is {theme.colorSecondary}
        </li>
        <li css={[accent, bold]}>The accent color is {theme.colorAccent}</li>
        <li css={[primaryDarkened, bold]}>
          Using polished, the primary color of{' '}
          <span css={primary}>{theme.colorPrimary}</span> is darkened to{' '}
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
