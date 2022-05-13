/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';
import { withTheme } from '@emotion/react';
import { ThemeTokens } from '../theme/theme';
import { css, jsx } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Text } from '../components/text/text';
import { StaticImage } from 'gatsby-plugin-image';

type indexPageProps = {
  theme: ThemeTokens;
  data: any;
};

const IndexPage: FunctionComponent<indexPageProps> = ({ theme, data }) => {
  const blogs = data.allMdx.nodes;

  const styleTitle = css`
    font-size: ${theme.size.xxl}px;
    font-weight: ${theme.font.weight.bold};
    line-height: ${theme.font.lineHeightMultiplier};
    margin: ${theme.size.xl * 2}px 0 ${theme.size.xl}px 0;
  `;

  const styleHr = css`
    height: 1px;
    border-color: ${theme.color.lightShade};
    margin-bottom: ${theme.size.xl}px;
  `;

  const styleMain = css`
    display: flex;
  `;

  const styleFigure = css`
    background: ${theme.color.lightestShade};
    flex-grow: 1;
    margin-right: ${theme.size.l}px;
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
        {blogs.map((node: any) => (
          <Link to={node.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>
          </Link>
        ))}
      </main>
    </div>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
      }
    }
  }
`;

export default withTheme(IndexPage);
