"use client"
import Image from 'next/image'
import {React, useState } from 'react'
import { buttons } from '../utils/Link-button';

const SideBar = () => {
    const [show, setShow] = useState(true);
    const HandleShow = () => {
        setShow(!show);
    }
    return (
        <aside className={`relative z-20 sm:flex hidden flex-col items-center h-screen p-[10px] ${show ? 'w-[270px]' : 'w-[64px]'} transition-all ease-in-out duration-500 bg-[#F8FAFC]`}>
            <div className={`flex justify-between items-center h-[64px] w-full p-[8px]`}>
                <div className='flex items-center gap-[8px]'>
                    <Image src={'/assets/sidebarlogo.svg'} alt='logo' height={30} width={30} />
                    {show && <h4 className='font-poppins font-bold text-xl'>Front-Desk</h4>}
                </div>
                {show && <Image src={'/assets/sidebarlogo2.svg'} alt='logo' height={20} width={20} />}
            </div>
            <div className='flex flex-col items-center h-[610px] w-full'>
                <div className='flex flex-col items-center h-[83px] w-full'>
                    <div className={`flex items-center ${show ? 'justify-between' : 'justify-center'} h-[40px] w-full p-[5px] bg-[#FFFFFF] border-b border-gray-200 shadow-custom`}>
                        {show && <p className='text-sm'>Location:Name</p>}
                        <Image className='cursor-pointer' onClick={HandleShow} src={'assets/sidebarlogo3.svg'} alt='logo' height={16} width={16} />
                    </div>

                    <div className='flex flex-col w-full h-[54px] bg-[#F1F5F9]'>
                        {show && <div className='flex h-[30px] w-full'>
                            <p className='text-md font-semibold mr-[5px]'>08:30 AM</p>
                            <p className='text-sm'>Tue 20 Jan</p>
                        </div>}
                        <div className='flex items-center justify-between gap-[5px] h-[30px] w-full'>
                            <div className={`flex ${!show ? 'justify-center' : ''} w-full`}>
                                <Image src={'assets/globeicon.svg'} alt='logo' height={23} width={23} />
                                {show && <p className='text-sm'> UTC: +5hours</p>}
                            </div>
                            {show && <Image src={'assets/downicon.svg'} alt='logo' height={20} width={20} />}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-[40px] gap-[15px] h-[431px] w-full'>
                    {buttons.map((button) => (
                        <button key={button.id} className={`link-button ${!show && 'small-link-button'}`}>
                            <Image src={button.image} alt='logo' height={22} width={22} />
                            {show && button.name}
                        </button>
                    ))}
                </div>
                <div className={`flex ${show ? 'justify-between' : 'justify-center'} h-[32px] w-full`}>
                    <div className='flex items-center gap-[7px]'>
                        {show && <Image src={'assets/dashboardicon.svg'} alt='logo' height={20} width={20} />}
                        {show && <p className='font-medium'>Dashboard</p>}
                    </div>
                    <Image src={'assets/dashboardicon2.svg'} alt='logo' height={20} width={20} />
                </div>
                <footer className='flex flex-col h-[110px] w-full mt-[35px]'>
                    <div className={`flex items-center ${!show ? 'justify-center' : 'justify-between'} h-[60px] w-full bg-[#FFFFFF]`}>
                        <div className={`flex items-center gap-[4px] ${!show ? 'justify-center w-full' : 'w-[170px]'} overflow-hidden`}>
                            <Image src={'assets/usericon.svg'} alt='logo' height={25} width={25} />
                            {show && <div>
                                <p className='font-medium'>Admin Name</p>
                                <p className='text-sm text-slate-700'>adminname@gmail.com</p>
                            </div>}
                        </div>
                        {show && <Image src={'assets/downicon.svg'} alt='logo' height={20} width={20} />}
                    </div>
                    <div className={`flex items-center gap-[10px] ${!show ? 'justify-center' : ''} h-[48px] w-full`}>
                        <Image src={'assets/questionicon.svg'} alt='logo' height={22} width={22} />
                        {show && <div className='flex flex-col'>
                            <p className='text-lg font-medium'>Help Center</p>
                            <p className='text-sm text-slate-700'>@2024 Omnify Inc.</p>
                        </div>}
                    </div>
                </footer>
            </div>
        </aside>
    )
}
export default SideBar;