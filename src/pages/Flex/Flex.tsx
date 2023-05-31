import { LinkButton, Title } from "@/components/atoms"
import { Page } from "@/components/molecules"

export const Component = () => {
  return (
    <Page title="Flex">
      <Title>Flex</Title>
      <p>
        <LinkButton
          view="text"
          href="https://codepen.io/enxaneta/full/adLPwv"
          blank
          noref
        >
          🛝 Playground
        </LinkButton>
      </p>
      <p>
        <LinkButton
          view="text"
          href="https://flexboxfroggy.com/#pl"
          blank
          noref
        >
          🕹️ Game
        </LinkButton>
      </p>
      <p>
        <LinkButton
          view="text"
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          blank
          noref
        >
          🤓 Complete guide
        </LinkButton>
      </p>
    </Page>
  )
}
