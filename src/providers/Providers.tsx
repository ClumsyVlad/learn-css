import { ReactNode } from "react"
import { HelmetProvider } from "react-helmet-async"

import { StyleProvider } from "./StyleProvider"

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <HelmetProvider>
      <StyleProvider>{children}</StyleProvider>
    </HelmetProvider>
  )
}
