import SectionWrapper from '@/components/section-wrapper'

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="#97576D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="lucide lucide-pencil-ruler"
          viewBox="0 0 24 24"
        >
          <path d="M15 5l4 4M13 7L8.7 2.7a2.41 2.41 0 00-3.4 0L2.7 5.3a2.41 2.41 0 000 3.4L7 13M8 6l2-2M2 22l5.5-1.5L21.17 6.83a2.82 2.82 0 00-4-4L3.5 16.5zM18 16l2-2"></path>
          <path d="M17 11l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
        </svg>
      ),
      title: 'Custom software',
      desc: 'We understand that every business is unique, which is why we offer bespoke software development solutions that perfectly suit your needs.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="#97576D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="lucide lucide-tablet-smartphone"
          viewBox="0 0 24 24"
        >
          <rect width="10" height="14" x="3" y="8" rx="2"></rect>
          <path d="M5 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2h-2.4M8 18h.01"></path>
        </svg>
      ),
      title: 'Mobile apps',
      desc: 'We work closely with you to transform your concepts into attractive, intuitive and high-performance applications.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="#97576D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="lucide lucide-mouse-pointer-square-dashed"
          viewBox="0 0 24 24"
        >
          <path d="M5 3a2 2 0 00-2 2M19 3a2 2 0 012 2M12 12l4 10 1.7-4.3L22 16zM5 21a2 2 0 01-2-2M9 3h1M9 21h2M14 3h1M3 9v1M21 9v2M3 14v1"></path>
        </svg>
      ),
      title: 'Websites',
      desc: 'We design and develop websites that not only capture attention, but also drive tangible results.',
    },
  ]

  return (
    <SectionWrapper>
      <div id="services" className="custom-screen text-gray-600">
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}

export default Features
