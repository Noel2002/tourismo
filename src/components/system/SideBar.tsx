import React from 'react';
import { CompassIcon } from '@/components/icons/CompassIcon';
import { TravelIcon } from '@/components/icons/TravelIcon';
import { MessengerIcon } from '@/components/icons/MessengerIcon';
import { NotificationIcon } from '@/components/icons/NotificationIcon';
import Logo from '@/components/system/Logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BookmarkIcon } from '@/components/icons/BookmarkIcon';

type SideBarProps = {
    activeTab?: string;
}
const SideBar = (props: SideBarProps) => {
  return (
    <div className=' py-8 space-y-12 max-w-[200px]'>
        <Logo />
        <ul className=' space-y-3'>
            <Link href={"/discover"} className={cn(' py-2 px-4 flex gap-4', props.activeTab == "discover"? "bg-green text-white  rounded-md": "")}>
                <CompassIcon />
                <span className={cn(props.activeTab == "discover"? "font-bold": "")}>Discover</span>
            </Link>
            <Link href={"/trips"} className={cn(' py-2 px-4 flex gap-4', props.activeTab == "trips"? "bg-green text-white  rounded-md": "")}>
                <TravelIcon />
                <span className={cn(props.activeTab == "trips"? "font-bold": "")}>Trips</span>
            </Link>
            <Link href={"/wishlist"} className={cn(' py-2 px-4 flex gap-4', props.activeTab == "wishlist"? "bg-green text-white  rounded-md": "")}>
                <BookmarkIcon />
                <span className={cn(props.activeTab == "wishlist"? "font-bold": "")}>Wishlist</span>
            </Link>
            <Link href={"/messages"} className={cn(' py-2 px-4 flex gap-4', props.activeTab == "messages"? "bg-green text-white  rounded-md": "")}>
                <MessengerIcon />
                <span className={cn(props.activeTab == "messages"? "font-bold": "")}>Messsages</span>
            </Link>
            <Link href={"/notifications"} className={cn(' py-2 px-4 flex gap-4', props.activeTab == "notifications"? "bg-green text-white  rounded-md": "")}>
                <NotificationIcon />
                <span className={cn(props.activeTab == "notifications"? "font-bold": "")}>Notification</span>
            </Link>
            
        </ul>
    </div>
  )
}

export default SideBar