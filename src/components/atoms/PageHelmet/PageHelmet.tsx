import { Helmet } from "react-helmet-async"

interface PageHelmetProps {
  text: string;
}

export const PageHelmet = ({ text }: PageHelmetProps) => {
  return (
    <Helmet>
      <title>Vaults.fyi | {text}</title>
    </Helmet>
  )
}
