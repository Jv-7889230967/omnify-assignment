import Image from "next/image";

export const columns = [
    {
      field: 'createdon',
      headerName: 'Created On',
      width: 200,
      renderHeader: () => (
        <div className='flex items-center'>
          <Image src='/assets/created-icon.svg' alt='Created Icon' width={20} height={20} />
          <span className='ml-2'>Created On</span>
        </div>
      ),
    },
    {
      field: 'payer', headerName: 'Payer', width: 200, renderHeader: () => (
        <div className='flex items-center'>
          <Image src='/assets/payer-icon.svg' alt='payer-icon' width={20} height={20} />
          <span className='ml-2'>Payer</span>
        </div>
      ),
    },
    {
      field: 'status', headerName: 'Status', width: 200,
      renderHeader: () => (
        <div className='flex items-center'>
          <Image src='/assets/status-icon.svg' alt='status-icon' width={20} height={20} />
          <span className='ml-2'>Status</span>
        </div>
      ),
    },
    {
      field: 'email', headerName: 'Email', width: 200,
      renderHeader: () => (
        <div className='flex items-center'>
          <Image src='/assets/email-icon.svg' alt='email-icon' width={20} height={20} />
          <span className='ml-2'>Email</span>
        </div>
      ),
    },
    {
      field: 'phone', headerName: 'Phone', width: 200,
      renderHeader: () => (
        <div className='flex items-center'>
          <Image src='/assets/email-icon.svg' alt='phone-icon' width={20} height={20} />
          <span className='ml-2'>Payer Phone</span>
        </div>
      ),
    },
    {
      field: 'services', headerName: 'Services', width: 200,
      renderHeader: () => (
        <div className='flex items-center'>
          <Image src='/assets/email-icon.svg' alt='services-icon' width={20} height={20} />
          <span className='ml-2'>Services</span>
        </div>
      ),
    },
    {
      field: 'schedule', headerName: 'Scheduled', width: 200,
      renderHeader: () => (
        <div className='flex items-center'>
          <Image src='/assets/email-icon.svg' alt='scheduled-icon' width={20} height={20} />
          <span className='ml-2'>Scheduled</span>
        </div>
      ),
    },
  ];