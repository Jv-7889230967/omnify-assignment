"use client"
import Image from 'next/image'
import {useState,lazy} from 'react'
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
const EditColumns =lazy(()=> import('./EditColumns'));

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [openedit,setopenEdit]=useState(false)
  const HandleClick = () => {
    setOpen(!open);
  }
  return (
    <nav className='relative flex flex-col items-start p-[25px] max-h-fit w-full gap-[10px]'>
      <div className='h-fit w-full flex sm:flex-col flex-row justify-between gap-[15px]'>
        <h3 className='text-2xl font-semibold'>WaitList</h3>
        <div className='sm:flex hidden flex-row gap-[30px] max-h-fit max-w-fit'>
          <p className='nav-p'>All Waitlist  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
          <p className='nav-p'>Newly Added  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
          <p className='nav-p'>Leads  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
        </div>
        <div className='z-100 h-fit w-fit sm:hidden flex justify-end'>
          <ListTwoToneIcon onClick={HandleClick} fontSize='large' className='relative cursor-pointer' />
          <div className={`overflow-hidden z-50 flex flex-col gap-[7px] absolute top-[3.7rem] ${!open ? 'h-[0px]' : 'h-[135px]'} transition-all ease-in-out duration-[0.25s] w-fit`}>
            <p className='nav-p'>All Waitlist  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
            <p className='nav-p'>Newly Added  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
            <p className='nav-p'>Leads  <span className='ml-[10px] text-xs text-slate-600'>100</span></p>
          </div>
        </div>
      </div>
      <div className='sm:flex hidden flex-row items-center justify-between h-[50px] w-full'>
        <button className='flex gap-[3px] bg-[#F1F5F9] hover:bg-[#E7EBEF] p-[10px] rounded-lg text-md font-sm whitespace-nowrap'>
          <Image src={'assets/filtericon.svg'} alt='logo' height={20} width={20} />
          Add Filter
        </button>
        <div className='flex flex-row items-center justify-evenly h-full w-[390px]'>
          <span><Image className='hover:scale-110 color-black transition-all ease-in-out focus:outline-none focus:ring-0 cursor-pointer' src={'assets/searchicon.svg'} alt='logo' height={20} width={20} /></span>
          <input className='h-full w-[230px] p-[5px] bg-[#FFFFFF] shadow-custom-light' placeholder='Search Client' />
          <Image src={'assets/refreshicon.svg'} alt='logo' height={20} width={20} />
          <Image onClick={()=>{setopenEdit(!openedit)}} src={'assets/flipicon.svg'} alt='logo' height={20} width={20} />
          <Image src={'assets/downloadicon.svg'} alt='logo' height={20} width={20} />
        </div>
      </div>
      <div className='sm:hidden flex flex-row justify-between items-center h-[50px] w-full'>
        <div className='flex flex-row justify-evenly items-center h-full w-[150px]'>
          <Image src={'assets/filtericon.svg'} alt='logo' height={25} width={25} />
          <Image src={'assets/refreshicon.svg'} alt='logo' height={20} width={20} />
          <Image onClick={()=>{setopenEdit(!openedit)}} src={'assets/flipicon.svg'} alt='logo' height={20} width={20} />
          <Image src={'assets/downloadicon.svg'} alt='logo' height={20} width={20} />
        </div>
        <Image className='m-0 hover:scale-110 color-black transition-all ease-in-out focus:outline-none focus:ring-0 cursor-pointer' src={'assets/searchicon.svg'} alt='logo' height={20} width={20} />
        <input className='h-full w-[170px] p-[5px] bg-[#FFFFFF] shadow-custom-light' placeholder='Search Client' />
      </div>
      {openedit && 
      <EditColumns/>
      }
    </nav>
  )
}

export default Filter