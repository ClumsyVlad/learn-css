import styled, { css } from "styled-components"

import { LinkButton } from "@/components/atoms"
import { routes } from "@/config"
import { FontSizes, FontWeights, Spacings, splitSelectors } from "@/styles"

export const Header = () => {
  return (
    <Element>
      <LogoLink href={routes.index}>
        <LogoPlaceholder>👨‍🎓 Learn CSS</LogoPlaceholder>
      </LogoLink>
      <Navigation>
        <LinksList>
          <LinksItem>
            <PageLink href={routes.cards} view="text">
              🃏 Cards
            </PageLink>
          </LinksItem>
          <LinksItem>
            <PageLink href={routes.selectors} view="text">
              👆 Selectors
            </PageLink>
          </LinksItem>
          <LinksItem>
            <PageLink href={routes.basicStyles} view="text">
              💇 Basic styles
            </PageLink>
          </LinksItem>
          <LinksItem>
            <PageLink href={routes.flex} view="text">
              🕺 Flex
            </PageLink>
          </LinksItem>
          <LinksItem>
            <PageLink href={routes.grid} view="text">
              🍱 Grid
            </PageLink>
          </LinksItem>
          <LinksItem>
            <PageLink href={routes.sandbox} view="text">
              🏜️ Sandbox
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
  font-size: ${FontSizes.large};
  line-height: 1;
  font-weight: ${FontWeights.bold};
`

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${Spacings.medium};
  padding-left: ${Spacings.small};
`

const LinksItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${Spacings.extraSmall};
`

const PageLink = styled(LinkButton)`
  white-space: nowrap;
  font-weight: ${FontWeights.bold};
  text-decoration: none;
`
