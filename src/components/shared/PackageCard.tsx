import Link from 'next/link'
import React from 'react'

type PackageCardProps = {
    title: string
    description: string
    price: number
    image: string
    rating: number
}
const PackageCard = (props: PackageCardProps) => {
  return (
    <Link href={'/tours/tourid'} className=' space-y-4'>
        <img 
            src={props.image} 
            alt={props.title} 
            className='w-full h-64 object-cover rounded-lg' 
        />
        <p className='text-xl font-bold line-clamp-2'>
            {props.title}
        </p>
        <div className='flex justify-between items-center'>
            <div className=' flex gap-1'>
                {
                    Array.from({ length: props.rating }).map((_, index) => (
                        <img key={index} src='/star.png' alt='star' className='w-4 h-4' />
                    ))
                }
            </div>
            <p className=' font-bold '>{`USD ${props.price}`}</p>
        </div>
        <p className=' line-clamp-2 text-ellipsis'>
            {props.description}
        </p>
    </Link>
  )
}

export default PackageCard