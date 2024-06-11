"use client"
import Image from 'next/image'
import { lazy, useState, useContext} from 'react'
import ResetContext from '../context/Reset-Context';
const Schedule =lazy(()=>import('./Filter-pages/Schedule'));
const People =lazy(()=>import('./Filter-pages/People-page'));
const Services=lazy(()=>import('./Filter-pages/Services'));

const Addfilter = () => {
    const [active, setActive] = useState('Schedule');
    const {setReset}=useContext(ResetContext);  {/* this is the reset context created*/}
    const HandleReset = () => { {/* funciton to handle the reste function by clicking the reset to default at the button of this code*/}
        setReset(true)
        setTimeout(() => setReset(false), 1500);
    }

    return (
        <div className='editor-container'>  {/* parnt container*/}
            <div className='flex flex-row h-[348px] w-full'>
                <div className='h-full sm:w-[230px] w-[20%] flex flex-col bg-[#F8FAFC] p-[10px] gap-[8px]'>
                    <button onClick={() => setActive('Schedule')} className={`editor-button ${active==='Schedule'?'bg-[#E2E8F0]':''}`}>
                        <Image src={'/assets/created-icon.svg'} alt='logo' height={20} width={20} />
                        Scheduled Date
                    </button>
                    <button onClick={() => setActive('People')} className={`editor-button ${active==='People'?'bg-[#E2E8F0]':''}`}>
                        <Image src={'/assets/people-icon.svg'} alt='logo' height={20} width={20} />
                        People
                    </button>
                    <button onClick={() => setActive('Services')} className={`editor-button ${active==='Services'?'bg-[#E2E8F0]':''}`}>
                        <Image src={'/assets/dashboardicon.svg'} alt='logo' height={20} width={20} />
                        Services/Products
                    </button>
                </div>
                {active === 'Schedule' && <Schedule/>}  {/* conditionally rendering different pages in the addfilter cmopoent based on which page is currently active from these three*/}
                {active === 'People' && <People/>}
                {active === 'Services' && <Services/>}
            </div>
            <div className='flex flex-row items-center bg-[white] gap-[13px] p-[10px] h-[52px] w-full justify-end'>
                <button onClick={HandleReset} className="h-[32px] w-[132px] text-md font-medium text-center border border-gray-200 whitespace-nowrap">Reset to Default</button>
                <button className="h-[32px] w-[100px] text-white font-medium bg-[black] text-center rounded-md">Apply</button>
            </div>
        </div>
    )
}

export default Addfilter;
