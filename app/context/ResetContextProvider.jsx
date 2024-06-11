"use client"
import { useState } from "react";
import ResetContext from "./Reset-Context";

const ResetContextProvider=({children})=>{
   const [reset,setReset]=useState(false);
   return(
    <ResetContext.Provider value={{reset,setReset}}>
    {children}
    </ResetContext.Provider>
   )
}
export default ResetContextProvider;