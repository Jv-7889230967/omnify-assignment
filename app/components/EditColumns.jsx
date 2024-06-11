"use client"
import { useState, useContext } from "react";
import { editlist } from "../utils/Edit-columns-list";
import ColumnsContext from "../context/Columns-context";
import { columns } from "../utils/Column-data";

const EditColumns = () => {
  const { setFilteredcolumns } = useContext(ColumnsContext);  {/* calling the column context here to set the slected columns in this component and then dispathing the updated state*/}
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleCheckboxChange = (event) => {
    const columnName = event.target.name;
    if (event.target.checked) {
      setSelectedColumns((prevSelectedColumns) => [...prevSelectedColumns, columnName]);
    } else {
      setSelectedColumns((prevSelectedColumns) => prevSelectedColumns.filter((column) => column !== columnName));
    }
  };

  const handleApply = () => {
    const filtered = columns.filter(column => selectedColumns.includes(column.field));
    setFilteredcolumns(filtered);
  };

  const handleReset = () => {  {/*reset function for this component */}
    setSelectedColumns([]);
    setFilteredcolumns(columns); // Reset to the default columns
  };

  return (
    <div className='z-20 fixed top-[180px] right-[55px] flex flex-col justify-evenly h-[472px] w-[320px] p-[10px] bg-[#FFFFFF] shadow-md shadow-[#64748B] rounded-lg'>
      <h2 className="text-md font-medium">Edit Columns</h2>
      <p className="text-sm text-[#334155] ">Select the columns to rearrange</p>
      <div className="overflow-y-auto h-[324px] w-full flex flex-col p-[7px] gap-[10px] justify-center">
        {/* rendering the columns list coming from utils folder in the app directory*/}
        {editlist.map((list) => (  
          <div key={list.id} className="h-[36px] w-full flex justify-between items-center">
            <input
              type="checkbox"
              id={list.id}
              name={list.name}
              value={list.name}
              onChange={handleCheckboxChange}
              checked={selectedColumns.includes(list.name)}  
            />
            <label htmlFor={list.id} className="text-sm font-medium h-[36px] w-[242px] flex items-center text-start p-[6px] rounded-md border border-[#E2E8F0]">{list.label}</label>
          </div>
        ))}
      </div>
      <div className="h-[32px] w-full flex items-center justify-between">
        <button onClick={handleReset} className="h-[32px] w-[132px] text-md font-medium text-center border border-gray-200 whitespace-nowrap">Reset to Default</button>
        <button onClick={handleApply} className="h-[32px] w-[138px] text-white font-medium bg-[black] text-center rounded-md">Apply</button>
      </div>
    </div>
  );
};

export default EditColumns;
