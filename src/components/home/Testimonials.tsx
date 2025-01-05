import React from 'react';
import Section from '@/components/shared/Section';
import { TESTIMONIALS } from '@/lib/data';

type TestimonialCardProps = {
    author: {
        name: string;
        photo: string;
        nationality: string;
    }
    rating: number;
    content: string;
}

const TestimonialCard = (props: TestimonialCardProps) => {
    return (
        <div className=' space-y-2'>
            <div className=' p-4 bg-[#212B37] rounded-lg space-y-4'>
                <div className=' flex gap-1'>
                    {Array.from({ length: props.rating }).map((_, index) => (
                        <img key={index} src='/star.png' alt='star' className='w-4 h-4' />
                    ))}
                </div>
                <p className=' text-base text-white'>
                    {props.content}
                </p>

            </div>
            <div className=' flex gap-2'>
                <img 
                    src={props.author.photo}
                    alt="avatar" 
                    className='w-12 h-12 object-cover rounded-full' 
                />
                <div className=''>
                    <p className='font-bold text-white'>
                        {props.author.name}
                    </p>
                    <p className=' text-sm text-white'>
                        {props.author.nationality}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
  return (
    <Section
        containerClassName=' bg-black'
        className=' space-y-6'
    >
        <h1 className=' font-bold text-4xl text-center text-white'>Testimonials</h1>
        <p className=' max-w-[800px] font-light text-base text-center text-white mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
        </p>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {
                TESTIMONIALS.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        author={testimonial.author}
                        rating={testimonial.ratings}
                        content={testimonial.content}
                    />
                ))
            }
        </div>
    </Section>
  )
}

export default Testimonials