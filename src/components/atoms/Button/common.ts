import { ReactNode } from "react"
import { css } from "styled-components"

import { Colors, FontSizes, Transitions, splitSelectors } from "@/styles"

export interface ButtonBasicProps {
  children: ReactNode;
  view?: "default" | "primary" | "text";
  className?: string;
}

const commonButtonStyles = css`
  display: inline-flex;
  gap: 12px;
  padding: 0;
  border: none;
  border-radius: 0;
  background: none;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  transition: ${Transitions.all};
`

const expandedButtonStyles = css`
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  font-size: ${FontSizes.medium};
  line-height: 1;
  padding: 0 16px;
  border: 1px solid transparent;
  text-decoration: none;
`

export const DefaultButtonStyleTestId = "default-button-style"
export const DefaultButtonStyles = css`
  --test-id: ${DefaultButtonStyleTestId};
  ${commonButtonStyles}
`

const PrimaryButtonStylesHover = css`
  background-color: ${Colors.accentDark};
  border-color: ${Colors.accentDark};
  color: ${Colors.accentLight};
`

export const PrimaryButtonStyleTestId = "primary-button-style"
export const PrimaryButtonStyles = css`
  --test-id: ${PrimaryButtonStyleTestId};
  ${commonButtonStyles}
  ${expandedButtonStyles}

  background-color: ${Colors.accent};
  border-color: ${Colors.accent};
  color: ${Colors.mainDark};

  ${splitSelectors(
    ["hover", "focus-visible", "active"],
    PrimaryButtonStylesHover
  )}

  &:disabled {
    background-color: ${Colors.main};
    border-color: ${Colors.main};
    color: ${Colors.mainLight};
  }
`

const TextButtonStylesHover = css`
  color: ${Colors.accent};
`

export const TextButtonStyleTestId = "text-button-style"
export const TextButtonStyles = css`
  --test-id: ${TextButtonStyleTestId};
  ${commonButtonStyles};

  color: ${Colors.accentDark};

  ${splitSelectors(["hover", "focus-visible", "active"], TextButtonStylesHover)}

  &:disabled {
    color: ${Colors.main};
  }
`
