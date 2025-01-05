import React, { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      lang="en"
      className={`${montserrat.variable} font-sans`}
    >
      <div className=' font-montserrat'>{children}</div>
    </main>
  )
}

export default Layout