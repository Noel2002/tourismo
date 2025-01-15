import PackageCard from '@/components/shared/PackageCard'
import DashboardLayout from '@/components/system/DashboardLayout'
import { PACKAGES } from '@/lib/data'
import React from 'react'

const Discover = () => {
  return (
    <DashboardLayout activeTab='discover'>
        <h1 className=' text-3xl font-bold'>Tour Packages</h1>
        <p className=' max-w-[800px] font-light text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {
            PACKAGES.map((pkg, index) => (
            <PackageCard
                key={index}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                image={pkg.image}
                rating={pkg.rating}
            />
            ))
        }
        </div>
    </DashboardLayout>
  )
}

export default Discover