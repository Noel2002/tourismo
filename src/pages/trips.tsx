import BookedPackageCard from '@/components/shared/BookedPackageCard';
import DashboardLayout from '@/components/system/DashboardLayout';
import { BOOKINGS } from '@/lib/data/bookings';
import Head from 'next/head';
import React from 'react';

const Trips = () => {
  return (
    <>
      <Head>
        <title>Tourismo - Trips</title>
      </Head>
      <DashboardLayout activeTab='trips'>
        <h1 className=' text-3xl font-bold'>Paid Tours</h1>
        <p className=' max-w-[800px] font-light text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>
        <div className=' grid grid-cols-2'>
          {
            BOOKINGS.map((booking, index) => (
              <BookedPackageCard
                key={index}
                {...booking}
              />
            ))
          }
        </div>
      </DashboardLayout>
    </>
  )
}

export default Trips