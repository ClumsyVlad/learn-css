import styled from "styled-components"

import { Spacings, Wrappers } from "@/styles"

export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: ${Wrappers.page};
  margin: 0 auto;
  padding: 0 ${Spacings.medium};
`

export const PageContainer = styled(Container)`
  margin: 16px auto;
`
