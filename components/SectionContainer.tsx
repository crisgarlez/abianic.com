import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    // <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</section>
    // <section className="max-w-screen-xl mx-auto px-4 md:px-8">{children}</section>
    <section className="custom-screen">{children}</section>
  )
}
