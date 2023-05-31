import styled from "styled-components"

import {
  ButtonBasicProps,
  DefaultButtonStyles,
  PrimaryButtonStyles,
  TextButtonStyles,
} from "./common"

interface LinkButtonProps extends ButtonBasicProps {
  href: string;
  blank?: boolean;
  noref?: boolean;
  testId?: string;
}

export const LinkButton = ({
  children,
  view = "primary",
  href,
  blank,
  noref,
  className,
  testId,
}: LinkButtonProps) => {
  return (
    <ButtonContainer
      view={view}
      href={href}
      target={blank ? "_blank" : undefined}
      rel={noref ? "noopener noreferrer" : undefined}
      className={className}
      data-testid={testId}
    >
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.a<LinkButtonProps>`
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
`
