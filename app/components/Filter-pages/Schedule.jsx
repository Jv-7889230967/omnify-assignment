import { lazy} from 'react';
const Calendar=lazy(()=>import('../Calendar'))
import StaticSearch from '../SearchBar';



const Schedule = () => {
    const data=[
        'All',
        'Custom',
        'Last 30 days',
        'This month',
        'Last month',
        'This quarter',
        '2 quarters ago',
        'This year',
        'Last year',
    ]
    return (
        <div className='editor-page-container'>
            <div className='flex flex-col h-[62px] w-full'>
                <h2 className='text-sm font:normal'>Show orders for</h2>
                <StaticSearch label='All time' data={data}/>
            </div>
            <div className='flex sm:flex-row flex-col justify-between h-[100px] w-full'>
                <div className='h-full flex flex-col gap-[7px]'>
                    <p className='text-sm font-medium text-[#334155]'>From</p>
                    <Calendar />  {/*calendar component */}
                </div>
                <div className='h-full flex flex-col gap-[7px]'>
                    <p className='text-sm font-medium text-[#334155]'>To</p>
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default Schedule