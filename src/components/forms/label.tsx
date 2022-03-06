/** @jsx jsx */
import { FunctionComponent, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';
import { withTheme } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';

type LabelProps = {
  id: string;
  text: ReactNode;
  disabled: boolean;
  theme: ThemeTokens;
};

const _Label: FunctionComponent<LabelProps> = ({
  id,
  text,
  disabled,
  theme,
}) => {
  // use your own hook to load the data you need

  const styleLabel = css`
    font-size: ${theme.font.size.xs}px;
    line-height: ${theme.font.lineHeightMultiplier};
    margin-bottom: ${theme.size.s}px;
    font-weight: ${theme.font.weight.bold};
    display: block;
    cursor: ${disabled ? 'default' : 'pointer'};
  `;

  return (
    <label htmlFor={id} css={styleLabel}>
      {text}
    </label>
  );
};

export const Label = withTheme(_Label);
