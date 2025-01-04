import React, { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} font-sans`}
    >
      <body className=' font-montserrat'>{children}</body>
    </html>
  )
}

export default Layout