import { Fragment } from "react"
import { Outlet } from "react-router-dom"

import { Header } from "@/components/organisms"

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}
