import { Helmet } from "react-helmet-async"

interface PageHelmetProps {
  text: string;
}

export const PageHelmet = ({ text }: PageHelmetProps) => {
  return (
    <Helmet>
      <title>Learn CSS | {text}</title>
    </Helmet>
  )
}
