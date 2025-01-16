import React from 'react';
import Section from '../shared/Section';
import PackageCard from '../shared/PackageCard';
import { PACKAGES } from '@/lib/data/packages';
import { Button } from '../ui/button';
import { useRouter } from 'next/router';

const TourPackages = () => {
  const router = useRouter();
  return (
    <Section className='space-y-6'>
        <h1 className=' text-3xl font-bold'>Tour Packages</h1>
        <p className=' max-w-[800px] font-light text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {
            PACKAGES.slice(0,3).map((pkg, index) => (
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
        <div className='flex justify-center'>
          <Button 
            className=' px-8 border border-black bg-transparent text-black hover:bg-black hover:text-white mx-auto' 
            onClick={()=> router.push('/discover')}
          >
            See more
          </Button>
        </div>
    </Section>
  )
}

export default TourPackages