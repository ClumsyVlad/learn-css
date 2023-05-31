import styled, { css } from "styled-components"

import { Colors, FontSizes, FontWeights } from "@/styles"

interface TypographyProps {
  size?: "small" | "medium" | "large";
  weight?: "thin" | "regular" | "bold";
  flat?: boolean;
}

const commonTextStyles = css<TypographyProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return FontSizes.small
      case "medium":
        return FontSizes.medium
      case "large":
        return FontSizes.large
      default:
        return
    }
  }};
  font-weight: ${({ weight }) => {
    switch (weight) {
      case "thin":
        return FontWeights.thin
      case "regular":
        return FontWeights.regular
      case "bold":
        return FontWeights.bold
      default:
        return
    }
  }};
  ${({ flat }) =>
    flat &&
    css`
      line-height: 1;
    `}
`

export const Paragraph = styled.p<TypographyProps>`
  margin: 0;
  ${commonTextStyles}
`

export const InlineText = styled.span<TypographyProps>`
  ${commonTextStyles}
`

export const ChartLabelStyles = css`
  font-size: ${FontSizes.small};
  font-weight: ${FontWeights.regular};
  fill: ${Colors.mainDark};
  color: ${Colors.mainDark};
  line-height: 1;
`
