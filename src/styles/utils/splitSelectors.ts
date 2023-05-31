import { css, FlattenInterpolation, ThemeProps } from "styled-components"

type SelectorType =
  | "hover"
  | "active"
  | "focus"
  | "focus-visible"
  | "focus-within"
  | "disabled"
  | "visited"
  | ":selection";

export const splitSelectors = (
  selectors: Array<SelectorType>,
  styles: FlattenInterpolation<ThemeProps<any>>
) => {
  return selectors.map(
    (selector) =>
      css`
        ${`&:${selector}`} {
          ${styles}
        }
      `
  )
}
