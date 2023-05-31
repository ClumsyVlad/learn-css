import { createBrowserRouter } from "react-router-dom"

import { routes } from "@/config"
import { Layout } from "@/pages"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.index,
        lazy: () => import("@/pages/MainPage"),
      },
      {
        path: routes.selectors,
        lazy: () => import("@/pages/Selectors"),
      },
      {
        path: routes.basicStyles,
        lazy: () => import("@/pages/BasicStyles"),
      },
    ],
  },
])
