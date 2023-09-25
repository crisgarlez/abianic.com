import Hero from '@/components/hero'
import GradientWrapper from '@/components/gradient-wrapper'
import Features from '@/components/features'
import CTA from '@/components/cta'
import ToolKit from '@/components/toolkit'
import Contacts from '@/components/contacts'
import FooterCTA from '@/components/footer-cta'

export default async function Page() {
  return (
    <>
      <Hero />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Contacts />
      </GradientWrapper>
      <FooterCTA />
    </>
  )
}
