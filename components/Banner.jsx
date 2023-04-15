import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='relative'>
      <Carousel
  autoPlay
  infiniteLoop
  showStatus={false}
  showIndicators={false}
  showThumbs={false}
  interval={5000}
>
  <div>
    <Image
      src="/assets/banner1.jpg"
      alt=""
      width={3000}
      height={600}
      loading="lazy"
    />
  </div>
  <div>
    <Image
      src="/assets/banner2.jpg"
      alt=""
      width={3000}
      height={600}
      loading="lazy"
    />
  </div>
  <div>
    <Image
      src="/assets/banner3.jpg"
      alt=""
      width={3000}
      height={600}
      loading="lazy"
    />
  </div>
  <div>
    <Image
      src="/assets/banner4.jpg"
      alt=""
      width={3000}
      height={600}
      loading="lazy"
    />
  </div>
</Carousel>
    </div>
  )
}
