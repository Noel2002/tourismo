import React from 'react';

type BookedPackageCardProps = {
    id: string;
    amount: number;
    date: string;
    items: string[];
    status: "incoming" | "completed";
    package: {
        title: string
        description: string
        price: number
        image: string
        rating: number
    }

}

const BookedPackageCard = (props: BookedPackageCardProps) => {
  return (
    <div className=' p-4 border border-[#BEBEBE] rounded-xl grid grid-cols-12 gap-4'>
        <div className=' col-span-4'>
            <img 
                className=' w-full h-full object-cover rounded-l-xl'
                src={props.package.image} 
            />
        </div>
        <div className=' col-span-8 space-y-4'>
            <div>
                <p className=' text-green font-medium'>{props.status}</p>
                <p className=' text-xl font-bold'>{props.package.title}</p>
            </div>
            <p className=' font-light'>{props.items.join(", ")}</p>
            <div>
                <p className=' font-light'><span className=' font-bold'>Booking ID: </span>{props.id}</p>
                <p className=' font-light'><span className=' font-bold'>Date: </span>{props.date}</p>
                <p className=' font-light'><span className=' font-bold'>Participants: </span>1 Adult</p>
                <p className=' font-light'><span className=' font-bold'>Amount: </span>{`${props.amount} USD`}</p>
            </div>
        </div>
    </div>
  )
}

export default BookedPackageCard