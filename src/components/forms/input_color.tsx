/** @jsx jsx */
import React, { FunctionComponent, Fragment } from 'react';
import { css, jsx } from '@emotion/react';
import { ThemeTokens } from '../../theme/theme';
import { v4 as uuid } from 'uuid';
import { Label } from './label';
import { withTheme } from '@emotion/react';

type InputColorProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name: string;
  value: string | number;
  disabled?: boolean;
  label?: string;
  theme: ThemeTokens;
};

const _InputColor: FunctionComponent<InputColorProps> = ({
  onChange,
  id,
  name,
  value,
  disabled = false,
  label,
  theme,
}) => {
  // use your own hook to load the data you need
  const randId = uuid();

  const styleInputColor = css`
    border-radius: ${theme.border.radius}px;
    height: ${theme.size.l}px;
    width: ${theme.size.l}px;
    border: none;
    -webkit-appearance: none;
    outline: none;
    cursor: ${disabled ? 'default' : 'pointer'};

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
      border-radius: ${theme.border.radius}px;
    }
  `;

  return (
    <Fragment>
      <Label id={id ? id : randId} text={label} disabled={disabled} />
      <input
        css={styleInputColor}
        id={id ? id : randId}
        name={name}
        type="color"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Fragment>
  );
};

export const InputColor = withTheme(_InputColor);
