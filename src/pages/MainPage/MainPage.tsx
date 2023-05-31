import { Image } from "@/components/atoms"
import { Page } from "@/components/molecules"

export const Component = () => {
  return (
    <Page title="Main page">
      <Image
        src="https://css-tricks.com/wp-content/uploads/2021/04/css-is-awesome.jpg"
        alt="Meme"
      />
    </Page>
  )
}
