import React, { useState } from 'react'
import './Banner.css'
import img from '/banner.svg'

const [banner,setBanner]=useState()
const banner =  <div className='banner-bg'>
<div className='text-banner'><h1>Аксессуары для Iphone 13 Pro Max</h1></div>   
<div className='img-banner'><img src={img} alt="banner" /></div>
</div>
const Banner = () => {
  return (
   
  )
}

export default Banner