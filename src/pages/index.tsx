/** @jsx jsx */
import { FunctionComponent } from 'react';
import { withTheme } from '@emotion/react';
import { ThemeTokens } from '../theme/theme';
import { css, jsx } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Text } from '../components/text/text';
import { StaticImage } from 'gatsby-plugin-image';

type indexPageProps = {
  theme: ThemeTokens;
};

const IndexPage: FunctionComponent<indexPageProps> = (props) => {
  const { theme } = props;

  const styleTitle = css`
    font-size: ${theme.sizeXXL}px;
    font-weight: ${theme.fontWeightBold};
    line-height: ${theme.lineHeight};
    margin: ${theme.sizeXL * 2}px 0 ${theme.sizeXL}px 0;
  `;

  const styleHr = css`
    height: 1px;
    border-color: ${theme.colorLightShade};
    margin-bottom: ${theme.sizeXL}px;
  `;

  const styleMain = css`
    display: flex;
  `;

  const styleFigure = css`
    background: ${theme.colorLightestShade};
    flex-grow: 1;
    margin-right: ${theme.sizeL}px;
    flex-basis: 0%;
  `;

  const styleArticle = css`
    flex-grow: 2;
    flex-basis: 0%;
  `;

  return (
    <div>
      <Helmet title="Index page title" defer={false} />
      <header>
        <h1 css={styleTitle}>Hello world</h1>
      </header>
      <hr css={styleHr} className="dave" />
      <main css={styleMain}>
        <figure css={styleFigure}>
          <StaticImage src="../images/dave.jpg" alt="Images work" />
        </figure>

        <article css={styleArticle}>
          <Text>
            <p>Hello world text</p>
          </Text>
        </article>
      </main>
    </div>
  );
};

export default withTheme(IndexPage);
