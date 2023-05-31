import styled from 'styled-components'

import { Container, InlineText, LinkButton } from '@/components/atoms'
import { Colors, Spacings } from '@/styles'

const WALLFACER_LABS_URL = 'https://wallfacer.io/'

export const Footer = () => {
  return (
    <FooterElement>
      <FooterContainer>
        <FooterCopyrights>
          by{' '}
          <LinkButton href={WALLFACER_LABS_URL} view="text" blank>
            Wallfacer Labs
          </LinkButton>
        </FooterCopyrights>
      </FooterContainer>
    </FooterElement>
  )
}

const FooterElement = styled.footer`
  display: flex;
  align-items: center;
  min-height: 64px;
`

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: end;
  align-items: end;
  min-height: 100%;
  padding: 0 ${Spacings.medium} ${Spacings.medium};
`

const FooterCopyrights = styled(InlineText).attrs({ size: 'small' })`
  color: ${Colors.main};
`
