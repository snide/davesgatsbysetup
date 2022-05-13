import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout/layout_mdx';
import React from 'react';

export default function PostPage({ data }: any) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;
  return (
    <Layout>
      {title}
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`;
