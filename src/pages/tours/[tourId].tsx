import DashboardLayout from '@/components/system/DashboardLayout';
import DatePicker from '@/components/shared/DatePicker';
import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

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
  )
}

export default Tour;