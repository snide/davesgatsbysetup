// Gatsby is lame and requires this page to be JS for now
import React from 'react';
import { Theme } from './src/theme/theme_context';

export const wrapPageElement = ({ element }) => {
  return <Theme>{element}</Theme>;
};
