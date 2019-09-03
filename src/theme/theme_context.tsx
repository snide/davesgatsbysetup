/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { jsx } from '@emotion/core';
import { StylesGlobal } from '../services/global_styling/reset/reset';
import { ThemeTokens } from './theme';
import { themeSelector } from './theme_selector';

type themeProps = {
  children: React.ReactNode;
  tokens: ThemeTokens;
};

export const Theme: FunctionComponent<themeProps> = props => {
  const { children } = props;

  const [themeControls, themeTokens] = themeSelector();

  return (
    <ThemeProvider theme={themeTokens}>
      <StylesGlobal theme={themeTokens} />
      <h3>Theme selector</h3>
      <p>
        Colors selected here update local store and pass down to every page
        through context
      </p>
      {themeControls}

      <h3>Inner content using that theme context</h3>
      {children}
    </ThemeProvider>
  );
};
