import { ReactNode } from "react"

import { PageContainer, PageContent, PageHelmet } from "@/components/atoms"

interface PageProps {
  children: ReactNode;
  title: string;
}

export function Page({ children, title }: PageProps) {
  return (
    <>
      <PageHelmet text={title} />
      <PageContent>
        <PageContainer>{children}</PageContainer>
      </PageContent>
    </>
  )
}
