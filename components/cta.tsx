import SectionWrapper from '@/components/section-wrapper'
import ctaImage from '../public/images/cta-image.jpg'
import Image from 'next/image'

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create successful business models with our IT solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Create successful business models with our IT solutions
            </h2>
            <p className="mt-3 text-gray-600">
              Abianic, a software development company, helps digitize businesses by focusing on clients' business challenges and needs. We value close and transparent cooperation and encourage our clients to actively participate in the project development life cycle.
            </p>
            <a
              href="https://calendly.com/abianic/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 py-2.5 px-4 text-center rounded-lg duration-150 text-white gradient-button "
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CTA
