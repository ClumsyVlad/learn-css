import styled from "styled-components"

import { InlineText, Paragraph } from "@/components/atoms"
import { Page } from "@/components/molecules"
import { FontWeights } from "@/styles"

export const Component = () => {
  return (
    <Page title="Main page">
      <Box>
        <Paragraph>
          <InlineText>CSS</InlineText>
          <InlineText>is</InlineText>
          <InlineText>avesome</InlineText>
        </Paragraph>
      </Box>
    </Page>
  )
}

const Box = styled.div`
  width: 300px;
  height: 300px;
  max-width: 100%;
  border: 4px solid black;
  font-size: 98px;
  line-height: 0.93;
  font-weight: ${FontWeights.bold};
  letter-spacing: 0.003em;
  background: white;

  ${InlineText} {
    display: block;
  }
`
