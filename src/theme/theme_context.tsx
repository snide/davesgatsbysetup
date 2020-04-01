/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';
import { jsx } from '@emotion/react';
import { StylesGlobal } from '../services/global_styling/reset/reset';
import { ThemeTokens } from './theme';
import { themeSelector } from './theme_selector';
import { Helmet } from 'react-helmet';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout/layout';

type themeProps = {
  children: React.ReactNode;
  tokens: ThemeTokens;
};

export const Theme: FunctionComponent<themeProps> = (props) => {
  const { children } = props;

  const [themeControls, themeTokens] = themeSelector();

  return (
    <ThemeProvider theme={themeTokens}>
      <StylesGlobal theme={themeTokens} />
      <Helmet>
        <link
          href={`https://fonts.googleapis.com/css?family=${themeTokens.fontFamily.replace(
            /\s/g,
            '+'
          )}:400,700&display=swap`}
          rel="stylesheet"
        />
      </Helmet>

      <Header themeControls={themeControls} />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};
