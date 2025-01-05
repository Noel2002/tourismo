import Testimonials from '@/components/home/Testimonials';
import TourPackages from '@/components/home/TourPackages';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import React from 'react';

const Jumbotron = () => {
  return (
    <Section 
      containerClassName="bg-cover bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply" 
      className='min-h-[500px] flex flex-col'
    >
      {/* ------navbar ----- */}
      <div className='flex justify-between items-center'>
        <img src="/logo.png" alt="hero" className='h-9' />
        <div className='flex gap-4'>
          <Button className=' text-base border border-green bg-transparent text-green font-bold px-8'>Sign up</Button>
          <Button className=' text-base bg-green text-white font-bold px-8'>Sign In</Button>
        </div>
      </div>
      
      {/* ------content ----- */}
      <div className='flex flex-col grow justify-center'>
        <p className='text-5xl font-bold text-white'>
          {"Unveil Rwanda's Splendor"}
        </p>
        <p className=' text-lg text-white max-w-[800px]'>
          Explore the land of a thousand hills, where vibrant cultures, stunning landscapes, and unforgettable wildlife encounters await your arrival.
        </p>

        {/* ------search box ----- */}

        <form className="max-w-[800px] mt-4">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input 
                  type="search" 
                  id="default-search" 
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
                  placeholder="Search tours, packages, events,  ..." 
                  
                  required 
                />
                <button 
                  type="submit" 
                  className="text-white absolute end-2.5 bottom-2.5 bg-green  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    Search
                  </button>
            </div>
        </form>
      </div>
    </Section>
  );
}

const Footer = ()=>{
  return (
    <Section
      containerClassName='bg-green'
    >
      <p className=' text-center text-white font-medium'>© Tourismo, 2024 | All rights reserved </p>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Tourismo - Home</title>
      </Head>
      <Jumbotron />
      <TourPackages />
      <Testimonials />
      <Footer />
    </>
  );
}
