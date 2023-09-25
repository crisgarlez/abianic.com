import SectionWrapper from '@/components/section-wrapper'
import NavLink from '@/components/navlink'

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Get started with Abianic today
        </h2>
        <p className="mt-3 text-gray-600">
          Hire experts to create your next idea, follow best practices, remove obstacles, and deliver on time.
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
  </SectionWrapper>
)

export default FooterCTA
