import { editlist } from "../utils/Edit-columns-list"

const EditColumns = () => {

  return (
    <div className='z-20 fixed top-[180px] right-[55px] flex flex-col justify-evenly h-[472px] w-[320px] p-[10px] bg-[#FFFFFF] shadow-md shadow-[#64748B] rounded-lg'>
      <h2 className="text-md font-medium">Edit Columns</h2>
      <p className="text-sm text-[#334155] ">Select the columnsto rearrange</p>
      <div className="overflow-y-auto h-[324px] w-full flex flex-col p-[7px] gap-[10px] justify-center">
        {editlist.map((list) => (
          <div key={list.id} className="h-[36px] w-full flex justify-between items-center">
            <input className="bg-[black]" type="checkbox" id={list.id} name={list.name} value={list.name} />
            <label htmlFor={list.id} className="text-sm font-medium h-[36px] w-[242px] flex items-center text-start p-[6px] rounded-md border border-[#E2E8F0]">{list.label}</label>
          </div>
        ))}
      </div>
      <div className="h-[32px] w-full flex items-center justify-between">
        <button className="h-[32px] w-[132px] text-md font-medium text-center border border-gray-200 whitespace-nowrap">Reset to Default</button>
        <button className="h-[32px] w-[138px] text-white font-medium bg-[black] text-center rounded-md">Apply</button>

      </div>
    </div>
  )
}

export default EditColumns