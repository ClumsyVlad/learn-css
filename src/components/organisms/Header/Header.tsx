import styled, { css } from 'styled-components'

import { Container, LinkButton } from '@/components/atoms'
import { routes } from '@/config'
import { Colors, FontSizes, FontWeights, Spacings, splitSelectors } from '@/styles'

export const Header = () => {
  return (
    <Element>
      <HeaderContainer>
        <Navigation>
          <LogoLink href={routes.index}>
            <LogoPlaceholder>Vaults.fyi</LogoPlaceholder>
          </LogoLink>
          <LinksList>
            <PageLink href={routes.index} view="text">
              🏡 Home
            </PageLink>
          </LinksList>
        </Navigation>
      </HeaderContainer>
    </Element>
  )
}

const Element = styled.header`
  display: flex;
  align-items: center;
  min-height: 64px;
`

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 100%;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${Spacings.large};
  width: 100%;
  flex-wrap: wrap;
  padding: ${Spacings.medium} 0;
`

const LogoLink = styled(LinkButton).attrs({ view: 'default' })`
  text-decoration: none;
  color: ${Colors.mainDark};
  ${splitSelectors(
    ['hover', 'focus-visible'],
    css`
      color: ${Colors.accent};
    `
  )}
`

const LogoPlaceholder = styled.span`
  margin: 0;
  font-size: ${FontSizes.giant};
  line-height: 1;
  font-weight: ${FontWeights.bold};
`

const LinksList = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacings.extraSmall} ${Spacings.medium};
  flex-wrap: wrap;
`

const PageLink = styled(LinkButton)`
  white-space: nowrap;
  font-weight: ${FontWeights.bold};
  text-decoration: none;
`
