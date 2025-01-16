import React from 'react';


const DatePicker = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input {...props} type="date" className='w-[300px] p-2 border border-black rounded-lg focus:outline-none' />
  )
}

export default DatePicker