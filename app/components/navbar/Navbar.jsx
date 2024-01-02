import Image from 'next/image'
import React from 'react'

import logo from '@/app/assets/convex_logo.svg'
export default function Navbar() {
  return (
      <nav>
          <Image src={logo} alt='logo' />
      </nav>
  );
}
