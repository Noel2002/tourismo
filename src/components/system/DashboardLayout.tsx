import React from 'react';
import SideBar from '@/components/system/SideBar';
import SearchBar from '../shared/SearchBar';
import { ShoppingCartIcon } from '../icons/ShoppingCartIcon';

type DashboardLayoutProps = {
    children: React.ReactNode;
    activeTab?: string;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className=' flex h-screen'>
        <SideBar activeTab={props.activeTab} />
        <div className='px-8 py-8 space-y-6 overflow-scroll flex-1'>
            <div className=' flex gap-8 items-center'>
                <SearchBar className=' flex-1' />
                <ShoppingCartIcon />
                <img 
                    className=' h-12 w-12 object-cover rounded-full' 
                    src='https://res.cloudinary.com/nowo-ltd/image/upload/v1736078016/tourismo/photo-1531746020798-e6953c6e8e04_baspau.jpg' 
                />
            </div>
            {props.children}
        </div>
    </div>
  )
}

export default DashboardLayout