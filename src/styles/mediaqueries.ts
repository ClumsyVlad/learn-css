const breakpoints = {
  mobile: 520,
  tablet: 768,
}

export const Mediaqueries = {
  mobile: `@media screen and (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media screen and (max-width: ${breakpoints.tablet}px)`,
  touchscreen: "@media (pointer: coarse)",
}
