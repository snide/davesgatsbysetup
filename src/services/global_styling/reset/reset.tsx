/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';
import { withTheme } from '@emotion/react';
import { ThemeTokens } from '../../../theme/theme';
import { FunctionComponent } from 'react';
import { styleFont } from '../typography/typography';

type StylesGlobalProps = {
  theme: ThemeTokens;
};

export const StylesGlobal: FunctionComponent<StylesGlobalProps> = (props) => {
  const { theme } = props;

  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: none;
          vertical-align: baseline;
        }

        code,
        pre,
        kbd,
        samp {
          font-family: mono;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          font-family: inherit;
          font-weight: inherit;
          font-size: inherit;
        }

        input,
        textarea,
        select,
        button {
          font-family: sans-serif;
        }

        em {
          font-style: italic;
        }

        strong {
          font-weight: 700;
        }

        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }

        html {
          ${styleFont({ fontFamily: theme.fontFamily, fontWeight: 400 })};
          font-size: ${theme.size}px;
          color: ${theme.colorDarkestShade};
          height: 100%;
          background-color: ${theme.colorEmptyShade};
        }

        body {
          line-height: 1;
        }

        *:focus {
          outline: none;
        }

        a {
          text-decoration: none;
          color: ${theme.colorPrimary};

          &:hover {
            text-decoration: none;
          }

          &:focus {
            text-decoration: none;
            outline: none;
          }
        }

        a:hover,
        button,
        [role='button'] {
          cursor: pointer;
        }

        input {
          margin: 0;
          padding: 0;
        }

        button {
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          outline: none;
          font-size: inherit;
          color: inherit;
          border-radius: 0;

          &:hover {
            cursor: pointer;
          }
        }

        ol,
        ul {
          list-style: none;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        hr {
          margin: 0;
        }

        fieldset {
          min-inline-size: auto;
        }
      `}
    />
  );
};

export default withTheme(StylesGlobal);
