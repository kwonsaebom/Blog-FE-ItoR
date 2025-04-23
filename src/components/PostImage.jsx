import exampleImage from '@assets/images/example.png'

export default function PostImage({ size }) {
  const smallSize = 'w-[92px] h-[92px]'
  const bigSize = 'w-[656px] h-[656px]'
  return (
    <>
      <img
        src={exampleImage}
        className={`py-3 px-4 box-content ${size === 'small' ? smallSize : bigSize}`}
        alt='article photo'
      />
    </>
  )
}
