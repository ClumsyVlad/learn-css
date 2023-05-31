import { css } from "styled-components"

export const theme = css`
  :root {
    --main: #78716c;
    --mainLighter: #d6d3d1;
    --mainLight: #e7e5e4;
    --mainDark: #292524;

    --accent: #b57f50;
    --accentLight: #e6cdb7;
    --accentDark: #684d36;

    --success: #22c55e;
    --successLight: #bbf7d0;
    --successDark: #065f46;

    --error: #ef4444;
    --errorLight: #fecaca;
    --errorDark: #991b1b;

    --warning: #f97316;
    --warningLight: #fed7aa;
    --warningDark: #9a3412;
  }
`

export const Colors = {
  main: "var(--main)",
  mainLighter: "var(--mainLighter)",
  mainLight: "var(--mainLight)",
  mainDark: "var(--mainDark)",
  accent: "var(--accent)",
  accentLight: "var(--accentLight)",
  accentDark: "var(--accentDark)",
  success: "var(--success)",
  successLight: "var(--successLight)",
  successDark: "var(--successDark)",
  error: "var(--error)",
  errorLight: "var(--errorLight)",
  errorDark: "var(--errorDark)",
  warning: "var(--warning)",
  warningLight: "var(--warningLight)",
  warningDark: "var(--warningDark)",
}
