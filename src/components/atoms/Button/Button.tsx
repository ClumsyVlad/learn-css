import { MouseEventHandler } from "react"
import styled from "styled-components"

import {
  ButtonBasicProps,
  DefaultButtonStyles,
  PrimaryButtonStyles,
  TextButtonStyles,
} from "./common"

interface ButtonProps extends ButtonBasicProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
  disabled?: boolean;
  testId?: string;
}

export const Button = ({
  children,
  view = "primary",
  onClick,
  disabled,
  className,
  testId,
}: ButtonProps) => {
  return (
    <ButtonContainer
      view={view}
      onClick={onClick}
      disabled={disabled}
      className={className}
      data-testid={testId}
    >
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button<ButtonProps>`
  ${({ view }) => {
    switch (view) {
      case "default":
      default:
        return DefaultButtonStyles
      case "primary":
        return PrimaryButtonStyles
      case "text":
        return TextButtonStyles
    }
  }};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`
