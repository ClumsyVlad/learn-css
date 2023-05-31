import { forwardRef, InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

import { Colors, FontSizes, splitSelectors, Transitions } from "@/styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <InputElement type={type} className={className} ref={ref} {...props} />
    )
  }
)

const InputElement = styled.input`
  min-width: 200px;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${Colors.accentDark};
  background-color: ${Colors.accentLight};
  font-size: ${FontSizes.medium};
  line-height: 1;
  color: ${Colors.accentDark};
  outline: none;
  transition: ${Transitions.all};

  &::placeholder {
    color: ${Colors.accent};
    transition: ${Transitions.all};
  }

  &:focus-visible {
    &::placeholder {
      color: transparent;
    }
  }

  ${splitSelectors(
    ["hover", "focus-visible"],
    css`
      border-color: ${Colors.accent};
    `
  )}
`
