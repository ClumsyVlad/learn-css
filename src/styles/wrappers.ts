import { Spacings } from "./spacings"

export const WrapperSizes = {
  page: "1280px",
}

export const Wrappers = {
  page: `calc(${WrapperSizes.page} + ${Spacings.medium} * 2)`,
}
