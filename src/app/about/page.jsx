import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <h1>About page</h1>
        <Image src="/about.png" alt="image" width={500} height={500}/>
    </div>
  )
}

export default AboutPage