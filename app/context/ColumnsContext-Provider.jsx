"use client"
import { useState } from "react";
import ColumnsContext from "./Columns-context";
import { columns } from "../utils/Column-data";


const ColumnsContextProvider=({children})=>{

   const [filteredcolumns,setFilteredcolumns]=useState(columns);
   return(
    <ColumnsContext.Provider value={{filteredcolumns,setFilteredcolumns}}>
    {children}
    </ColumnsContext.Provider>
   )
}
export default ColumnsContextProvider;