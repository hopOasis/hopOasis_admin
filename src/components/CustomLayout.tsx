import { Layout } from "react-admin"
import { MyAppBar } from "./MyAppBar"
import { PropsWithChildren } from "react"

export const MyLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Layout appBar={MyAppBar}>{children}</Layout>
  )
}
