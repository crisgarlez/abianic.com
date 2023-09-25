import Image from 'next/image'

const Brand = ({ ...props }) => (
  <Image src="/logo.svg" alt="Abianic logo" height={50} width={120} {...props} priority />
)
export default Brand
