import React from 'react'
import StaticSearch from '../SearchBar'

const Tags = () => {
  const services=[
    'Show all service type',
    'Class',
    'Appointment',
    'Facility',
    'Class Pack',
    'Membership',
    'General items'
  ]
  const servicetype=[
    'Show All',
    'Public',
    'Private',
    'Disable',
     'Draft'
  ]
  return (
    <div className='flex flex-col gap-[25px]'>
       <div className='flex flex-col'>
        <p className='text-md font-medium'>Service type</p>
        <StaticSearch label={'Show all services type'} data={services}/>
       </div>
       <div className='flex flex-col'>
        <p className='text-md font-medium'>Service type</p>
        <StaticSearch label={'Select services type'} data={servicetype}/>
       </div>
    </div>
  )
}

export default Tags