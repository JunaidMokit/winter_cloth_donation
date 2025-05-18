import React from 'react'
import home_two from '../../assets/home_two.jpg'
import home_one from '../../assets/home_one.jpg'
import home_three from '../../assets/home_three.jpg'

function Banner() {
  return (
  <div className='flex'>
      <div className="carousel w-1/2 m-auto  overflow-hidden  h-80 mt-4">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={home_two}
      className="w-full h-full" />
    <div className="absolute left-5 right-5 top-3/12 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle text-4xl text-amber-500">❮</a>
      <a href="#slide2" className="btn btn-circle text-4xl text-amber-500">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={home_one}
       className="w-full h-full" />
    <div className="absolute left-5 right-5 top-3/12 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle text-4xl text-amber-500">❮</a>
      <a href="#slide3" className="btn btn-circle text-4xl text-amber-500">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={home_two}
      className="w-full h-full" />
    <div className="absolute left-5 right-5 top-3/12 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2"  className="btn btn-circle text-4xl text-amber-500">❮</a>
      <a href="#slide4"  className="btn btn-circle text-4xl text-amber-500">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={home_one}
      className="w-full h-full" />
    <div className="absolute left-5 right-5 top-3/12 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3"  className="btn btn-circle text-4xl text-amber-500">❮</a>
      <a href="#slide1"  className="btn btn-circle text-4xl text-amber-500">❯</a>
    </div>
  </div>
</div>
  </div>
  )
}

export default Banner
