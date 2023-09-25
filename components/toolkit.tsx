import SectionWrapper from '@/components/section-wrapper'
import Image from 'next/image'

const ToolKit = () => {
  const features = [
    {
      icon: '/static/icons/wordpress.svg',
      title: 'Wordpress',
      desc: 'WordPress is an open source content management system (CMS).',
    },
    {
      icon: '/static/icons/nextjs.svg',
      title: 'Next.js',
      desc: 'Next.js is a React framework that gives you the building blocks for building web applications.',
    },
    {
      icon: '/static/icons/tailwind.svg',
      title: 'Tailwind CSS',
      desc: 'Tailwind CSS is basically a top-of-the-line CSS framework for creating user interfaces quickly.',
    },
    {
      icon: '/static/icons/nodejs.svg',
      title: 'Node.js',
      desc: 'Node.js is an open source, cross-platform, back-end JavaScript runtime environment.',
    },
    {
      icon: '/static/icons/vercel.svg',
      title: 'Vercel',
      desc: 'Vercel is a cloud platform that allows developers to host web applications.',
    },
    {
      icon: '/static/icons/figma.svg',
      title: 'Figma',
      desc: 'Figma is a web-based UI design and graphics editing application.',
    },
  ]

  return (
    <SectionWrapper>
      <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            We work with the best tool kit
          </h2>
          <p>These are some of our favorite tools.</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                  <Image src={item.icon} width={24} height={24} alt={item.title} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ToolKit
