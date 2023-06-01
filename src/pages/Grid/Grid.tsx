import styled from "styled-components"

import { LinkButton, Title } from "@/components/atoms"
import { Page } from "@/components/molecules"

export const Component = () => {
  return (
    <Page title="Grid">
      <Title>Flex</Title>
      <p>
        <LinkButton view="text" href="https://gridbyexample.com/" blank noref>
          👀 Examples
        </LinkButton>
      </p>
      <p>
        <LinkButton
          view="text"
          href="https://cssgridgarden.com/#pl"
          blank
          noref
        >
          🕹️ Game
        </LinkButton>
      </p>
      <p>
        <LinkButton
          view="text"
          href="https://css-tricks.com/snippets/css/complete-guide-grid/"
          blank
          noref
        >
          🤓 Complete guide
        </LinkButton>
      </p>

      <OurGrid>Our grid</OurGrid>
    </Page>
  )
}

const OurGrid = styled.section`
  display: grid;
  border: 1px solid gray;
  background: gray;
  min-height: 500px;
`
