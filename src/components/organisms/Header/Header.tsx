import styled, { css } from "styled-components"

import { LinkButton } from "@/components/atoms"
import { routes } from "@/config"
import { FontSizes, FontWeights, Spacings, splitSelectors } from "@/styles"

export const Header = () => {
  return (
    <Element>
      <LogoLink href={routes.index}>
        <LogoPlaceholder>Learn CSS</LogoPlaceholder>
      </LogoLink>
      <Navigation>
        <LinksList>
          <LinksItem>
            <PageLink href={routes.index} view="text">
              🏡 Home
            </PageLink>
          </LinksItem>
        </LinksList>
      </Navigation>
    </Element>
  )
}

const Element = styled.header`
  height: 100%;
  padding: 0 ${Spacings.medium};
  background: white;
  border-right: 1px solid black;
`

const LogoLink = styled(LinkButton).attrs({ view: "default" })`
  margin-top: ${Spacings.medium};
  text-decoration: none;
  color: black;
  ${splitSelectors(
    ["hover", "focus-visible"],
    css`
      color: gray;
    `
  )}
`

const Navigation = styled.nav`
  margin-top: ${Spacings.medium};
`

const LogoPlaceholder = styled.span`
  margin: 0;
  font-size: ${FontSizes.giant};
  line-height: 1;
  font-weight: ${FontWeights.bold};
`

const LinksList = styled.ul`
  display: block;
  padding-left: ${Spacings.small};
`

const LinksItem = styled.li`
  display: block;

  & + & {
    margin-top: ${Spacings.medium};
  }
`

const PageLink = styled(LinkButton)`
  white-space: nowrap;
  font-weight: ${FontWeights.bold};
  text-decoration: none;
`
