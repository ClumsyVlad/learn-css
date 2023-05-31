import { ReactNode } from "react"

import { GlobalStyles } from "@/styles/GlobalStyles"

interface StyleProviderProps {
  children: ReactNode;
}

export const StyleProvider = ({ children }: StyleProviderProps) => (
  <>
    <GlobalStyles />
    {children}
  </>
)
