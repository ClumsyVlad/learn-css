import { RouterProvider } from "react-router-dom"

import { FallbackPage } from "./pages"
import { router } from "./router"

import { Providers } from "@/providers"

function App() {
  return (
    <Providers>
      <RouterProvider router={router} fallbackElement={<FallbackPage />} />
    </Providers>
  )
}

export default App
