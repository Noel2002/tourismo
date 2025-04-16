import DashboardLayout from '@/components/system/DashboardLayout';
import DatePicker from '@/components/shared/DatePicker';
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { TickCircleIcon } from '@/components/icons/TickCircleIcon';
import { CrossCircleIcon } from '@/components/icons/CrossCircleIcon';
import { REVIEWS } from '@/lib/data/reviews';
import Head from 'next/head';

const MainPane = ()=>{
    return (
        <div className=' space-y-6'>
            <img 
                src="https://res.cloudinary.com/nowo-ltd/image/upload/v1736073731/tourismo/akagera-wildlife_szlwol.jpg"
                className='w-full rounded-2xl'
                alt="" 
            />
            <div className='space-y-12'>
                {/* ------------ Description --------------- */}
                <div className='space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <span className=' w-8 h-8 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full'>1</span>
                        <h3 className=' text-2xl font-bold'>Description</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
                    </p>
                </div>

                {/* ------------ Package options --------------- */}
                <div className='space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <span className=' w-8 h-8 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full'>2</span>
                        <h3 className=' text-2xl font-bold capitalize'>Package options</h3>
                    </div>
                    <div>
                        <div className='space-y-3'>
                            <label htmlFor="date" className='block'>Select a date</label>
                            <DatePicker id="date" name="date" />
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <p>Travellers</p>
                        <RadioGroup defaultValue="solo" className=' flex gap-8'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="solo" id="solo" className=' ' />
                                <Label htmlFor="solo">Solo</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2-4" id="2-4" />
                                <Label htmlFor="2-4">Group  2-4</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="5-8" id="5-8" />
                                <Label htmlFor="5-8">Group 5-8</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className='space-y-3'>
                        <p>Package Type</p>
                        <RadioGroup defaultValue="1day" className=' flex gap-8'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1day" id="1day" className=' ' />
                                <Label htmlFor="solo">1 day</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="2days" id="2days" />
                                <Label htmlFor="2days">2 days</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="3days" id="3days" />
                                <Label htmlFor="3days">3 days</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className='space-y-3'>
                        <p>Add-Ons</p>
                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id="biking" className='' />
                                <label htmlFor="biking" className=''>Biking($20)</label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id="camping" className='' />
                                <label htmlFor="camping" className=''>Camping($30)</label>
                            </div>
                        </div>                        
                    </div>

                    <div className=' flex justify-between items-center'>
                        <div>
                            <p>Total</p>
                            <p className=' font-bold text-xl'>USD 40</p>   
                        </div>
                        <div className=' flex gap-4'>
                            <Button className=' font-semibold min-w-[150px] bg-green hover:bg-white hover:text-green hover:border hover:border-green'>Add to cart</Button>
                            <Button className=' font-semibold min-w-[150px] bg-orange hover:bg-white hover:text-orange hover:border hover:border-orange'>Book</Button>
                        </div>
                                          
                    </div>
                </div>

                {/* ------------ Before you book --------------- */}
                <div className='space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <span className=' w-8 h-8 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full'>3</span>
                        <h3 className=' text-2xl font-bold'>Before you book</h3>
                    </div>
                    <h2 className=' font-semibold text-lg'>Eligibility</h2>
                    <ul className=' list-disc ml-6'>
                        <li>Free for children below 12 years old</li>
                        <li>Children aged 12+ years will be charged as adults</li>
                    </ul>

                    <h2 className=' font-semibold text-lg'>What is included</h2>
                    <ul className=' list-none space-y-3'>
                        <li className=' flex gap-2'>
                            <TickCircleIcon />
                            <p>Local Guide: An experienced guide who will accompany you during the trekking expedition.</p>
                        </li>
                        <li className=' flex gap-2'>
                            <CrossCircleIcon />
                            <p>Visa fees.</p>
                        </li>
                    </ul>
                </div>

                {/* ------------ Terms and Conditions --------------- */}
                <div className='space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <span className=' w-8 h-8 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full'>4</span>
                        <h3 className=' text-2xl font-bold'>Terms and Conditions</h3>
                    </div>
                    <div>
                        <h2 className=' font-semibold text-lg'>Confirmation</h2>
                        <p>You'll get confirmation within minutes. If you don't see any confirmation, reach out to our customer support. </p>                        
                    </div>
                    <div>
                        <h2 className=' font-semibold text-lg'>Cancellation policy</h2>
                        <ul className='list-disc list-inside ml-4'>
                            <li>
                                <span className=' font-medium'>Refund</span>
                                <ul className='list-disc list-inside ml-4'>
                                    <li>You'll get a full refund if you cancel at least 10 days before the activity starts</li>
                                    <li>You'll get half refund if you cancel at least 5 days before</li>
                                    <li>No show on the day, Zero refund</li>
                                </ul>
                            </li>
                        </ul>                      
                    </div>
                </div>

                {/* ------------ Meeting Point --------------- */}
                <div className='space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <span className=' w-8 h-8 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full'>5</span>
                        <h3 className=' text-2xl font-bold'>Meeting point</h3>
                    </div>
                    <div>
                        <p>Please arrive 10-15 minutes before we start to avoid rushing. There are various options to grab a coffee or a snack (only local money is accepted)  at the meeting point.</p>                        
                        <div>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.529503093033!2d30.042306375807748!3d-1.9408295366935417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca530791fc1c1%3A0xe3ab843374156132!2sNyabugogo%20Bus%20Park!5e0!3m2!1sen!2shk!4v1744815558524!5m2!1sen!2shk" 
                            width="600" 
                            height="450" 
                            className='rounded-2xl'
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            >
                        </iframe>
                        </div>
                    </div>            
                </div>

                {/* ------------ Reviews --------------- */}
                <div className='space-y-6'>
                    <div className='flex gap-4 items-center'>
                        <span className=' w-8 h-8 flex items-center justify-center text-xl font-bold text-white bg-black rounded-full'>6</span>
                        <h3 className=' text-2xl font-bold'>Reviews</h3>
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            REVIEWS.map((review, index) => (
                                <div className='p-4 rounded-2xl border border-gray-400 space-y-4'>
                                    <div className='flex items-center gap-4'>
                                        <img 
                                            src={review.user.photo} 
                                            alt="profile photo" 
                                            className=' w-12 h-12 rounded-full' 
                                        />
                                        <div className=' flex flex-1 flex-col'>
                                            <div className=' flex justify-between'>
                                                <p className=' font-semibold'>{review.user.name}</p>
                                                <p className=' font-light text-xs'>2 days ago</p>
                                            </div>
                                            <p className=' text-sm text-green font-semibold'>Verified booking</p>
                                        </div>
                                    </div>
                                    <p className=' text-sm'>
                                        {review.text}
                                    </p>
                                    <div className='grid grid-cols-4 gap-3'>
                                        {                                    
                                            review.photos.slice(0, 4).map((photo, index) => {
                                                if(index == 3 && review.photos.length > 4){
                                                    return (
                                                        <div key={index} className=' w-full bg-black aspect-square rounded-lg flex items-center justify-center text-sm text-white font-semibold'>
                                                            {`+${review.photos.length - 4} more`}
                                                        </div>
                                                    )
                                                }
                                                return (
                                                    <img 
                                                        key={index}
                                                        src={photo} 
                                                        alt="review photo" 
                                                        className=' w-full aspect-square object-cover rounded-lg' 
                                                    />
                                                )
                                            })
                                            
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>            
                </div>



            </div>
        </div>
    );
}

const SidePane = ()=>{
    return (
        <div></div>
    );
}

const Tour = () => {
  return (
    <>
        <Head>
            <title>The Twin Lakes Adventure</title>
        </Head>
        <DashboardLayout>
            <div className='space-y-8'>
                <h1 className=' font-bold text-3xl'>The Twin Lakes Adventure</h1>
                <div className='grid grid-cols-12 gap-6'>
                    <div className=' col-span-9'>
                        <MainPane />
                    </div>
                    <div className=' col-span-3'>
                        <SidePane />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    </>
  )
}

export default Tour;