import { LinkButton, Title } from "@/components/atoms"
import { Page } from "@/components/molecules"

export const Component = () => {
  return (
    <Page title="Selectors">
      <Title>Selectors</Title>
      <p>
        <LinkButton
          view="text"
          href="https://www.w3schools.com/cssref/css_selectors.php"
          blank
          noref
        >
          🔎 List of selectors
        </LinkButton>
      </p>
      <p>
        <LinkButton view="text" href="https://flukeout.github.io/" blank noref>
          👉 Lets practice
        </LinkButton>
      </p>
    </Page>
  )
}
