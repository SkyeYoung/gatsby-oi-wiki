import { css, SerializedStyles } from '@emotion/react'
import { Theme } from '@mui/material/styles/createTheme'

const pseudoCodeStyle = (theme: Theme): SerializedStyles => css`
  .ps-root {
    font-family: MJXTEX, "Times New Roman", Times, serif;
    font-size: 1em;
    font-weight: 100;
    -webkit-font-smoothing: antialiased !important;
  }

  .ps-root .ps-algorithm {
    margin: 0.8em 0;
    border-top: 3px solid ${theme.palette.text.secondary};
    border-bottom: 2px solid rgba(var(--text-secondary));
  }

  .ps-root .ps-algorithm.with-caption > .ps-line:first-child {
    border-bottom: 2px solid ${theme.palette.text.secondary};
    padding-top: .5em;
  }

  .ps-root .katex {
    text-indent: 0;
    font-size: 1em;
  }

  .ps-root .MathJax,
  .ps-root .MathJax_CHTML {
    text-indent: 0;
    font-size: 1em !important;
  }

  .ps-root .ps-line {
    margin: 0;
    padding: 0;
    line-height: 1.2;
  }

  .ps-root .ps-funcname {
    font-family: MJXTEX, "Times New Roman", Times, serif;
    font-weight: 400;
    font-variant: small-caps;
    font-style: normal;
    text-transform: none;
  }

  .ps-root .ps-keyword {
    font-family: MJXTEX-B, "Times New Roman", Times, serif;
    font-weight: 700;
    font-variant: normal;
    font-style: normal;
    text-transform: none;
  }

  .ps-root .ps-comment {
    font-family: MJXTEX, "Times New Roman", Times, serif;
    font-weight: 400;
    font-variant: normal;
    font-style: normal;
    text-transform: none;
  }

  .ps-root .ps-linenum {
    font-size: 0.8em;
    line-height: 1em;
    width: 1.6em;
    text-align: right;
    display: inline-block;
    position: relative;
    padding-right: 0.3em;
  }

  .ps-root .ps-algorithmic.with-linenum .ps-line.ps-code {
    text-indent: -1.6em;
  }

  .ps-root .ps-algorithmic.with-linenum .ps-line.ps-code > span {
    text-indent: 0;
  }
`

export default pseudoCodeStyle
