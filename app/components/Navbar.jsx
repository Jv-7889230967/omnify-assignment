"use client"
import Image from 'next/image'
import { useState, lazy } from 'react'
import ResetContextProvider from '../context/ResetContextProvider';
const EditColumns = lazy(() => import('./EditColumns'));
const Addfilter = lazy(() => import('./Add-filter'));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openedit, setopenEdit] = useState(false)
  const [openfilter, setOpenfilter] = useState(false);
  const HandleClick = () => {
    setOpen(!open);
  }
  return (
    <nav className='relative flex flex-col items-start p-[25px] max-h-fit w-full gap-[10px]'>  {/*this is the navbar container */}
      <div className='h-fit w-full flex sm:flex-col flex-row justify-between gap-[15px]'>
        <h3 className='text-2xl font-semibold'>WaitList</h3>
        <div className='sm:flex hidden flex-row gap-[30px] max-h-fit max-w-fit'>
          <p className='nav-p'>All Waitlist  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
          <p className='nav-p'>Newly Added  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
          <p className='nav-p'>Leads  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
        </div>
      </div>
      <div className='sm:flex hidden flex-row items-center justify-between h-[50px] w-full'>
        <button onClick={() => { setOpenfilter(!openfilter) }} className='flex gap-[3px] bg-[#F1F5F9] hover:bg-[#E7EBEF] p-[10px] rounded-lg text-md font-sm whitespace-nowrap'>
          <Image src={'assets/filtericon.svg'} alt='logo' height={20} width={20} />
          Add Filter
        </button>
        <div className='flex flex-row items-center justify-evenly h-full w-[390px]'>
          <span><Image className='hover:scale-110 color-black transition-all ease-in-out focus:outline-none focus:ring-0 cursor-pointer' src={'assets/searchicon.svg'} alt='logo' height={20} width={20} /></span>
          <input className='h-full w-[230px] p-[5px] bg-[#FFFFFF] shadow-custom-light' placeholder='Search Client' />
          <Image src={'assets/refreshicon.svg'} alt='logo' height={20} width={20} />
          <Image onClick={() => { setopenEdit(!openedit) }} src={'assets/flipicon.svg'} alt='logo' height={20} width={20} />
          <Image src={'assets/downloadicon.svg'} alt='logo' height={20} width={20} />
        </div>
      </div>
      <div className='sm:hidden flex flex-col justify-between items-center h-[50px] w-full gap-[10px]'>
        <div className='flex w-full'>
          <Image className='m-0 hover:scale-110 color-black transition-all ease-in-out focus:outline-none focus:ring-0 cursor-pointer' src={'assets/searchicon.svg'} alt='logo' height={20} width={20} />
          <input className='h-[40px] w-full p-[5px] bg-[#FFFFFF] shadow-custom-light' placeholder='Search Client' />
        </div>
        <div className='flex flex-row justify-evenly items-center h-full w-full '>
          <Image onClick={() => { setOpenfilter(!openfilter) }} src={'assets/filtericon.svg'} alt='logo' height={25} width={25} />
          <Image src={'assets/refreshicon.svg'} alt='logo' height={20} width={20} />
          <Image onClick={() => { setopenEdit(!openedit) }} src={'assets/flipicon.svg'} alt='logo' height={20} width={20} />
          <Image src={'assets/downloadicon.svg'} alt='logo' height={20} width={20} />
        </div>
      </div>
      {openedit && <EditColumns/>}  {/* renderin gthe editcolumn component conditionally on click the editor icon*/}
      <ResetContextProvider>  {/* declared a context provider for handling the reset todefault for all component and elements inside the Addfilter component*/}
        {openfilter && <Addfilter />}
      </ResetContextProvider>
    </nav>
  )
}

export default Navbar