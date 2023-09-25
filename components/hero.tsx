import NavLink from '@/components/navlink'

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Create and scale your next business idea faster
        </h1>
        <p className="max-w-xl mx-auto font-medium">
          Abianic makes it easy for you to create and grow your applications or any business idea.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <a
            href="https://calendly.com/abianic/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 text-center rounded-lg duration-150 text-white gradient-button "
          >
            Schedule a call
          </a>
          <NavLink href="#services" className="text-gray-700 border hover:bg-gray-50" scroll={true}>
            Find out about our services
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
