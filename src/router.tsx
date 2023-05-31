import { createBrowserRouter } from "react-router-dom"

import { routes } from "@/config"
import { Layout } from "@/pages"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routes.index,
        lazy: () => import("@/pages/MainPage/MainPage"),
      },
      {
        path: routes.selectors,
        lazy: () => import("@/pages/Selectors/Selectors"),
      },
      {
        path: routes.basicStyles,
        lazy: () => import("@/pages/BasicStyles/BasicStyles"),
      },
      {
        path: routes.flex,
        lazy: () => import("@/pages/Flex/Flex"),
      },
      {
        path: routes.grid,
        lazy: () => import("@/pages/Grid/Grid"),
      },
    ],
  },
])
