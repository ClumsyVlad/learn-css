import styled from "styled-components"

import { InlineText, Title } from "@/components/atoms"
import { Page } from "@/components/molecules"

export const Component = () => {
  return (
    <Page title="Sandbox">
      <Title>Sandbox</Title>
      <p>
        <InlineText>Let's write some styles</InlineText>
      </p>
      <Sandbox></Sandbox>
    </Page>
  )
}

const Sandbox = styled.section`
  min-width: 500px;
  min-height: 500px;
  background-color: beige;
  border: 10px solid beige;
  border-image: repeating-linear-gradient(
      40deg,
      hsl(30, 50%, 15%),
      hsl(20, 50%, 30%),
      hsl(25, 40%, 20%) 8px
    )
    60;
`
