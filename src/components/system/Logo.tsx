import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
        <img src="/logo.png" alt="hero" className='h-9' />
    </Link>
  )
}

export default Logo