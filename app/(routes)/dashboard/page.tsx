import React from 'react'
import { SideBar } from '@/components/dashboard/SideBar'
import { Navbar } from '@/components/dashboard/Navbar'

export default function Dashboard () {
  return (
    <div className='h-screen w-screen flex'>
        <div className='flex-3'>
            <SideBar />
        </div>
        <div className='flex-1'>
            <Navbar />
        </div>
    </div>
  )
}

