import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import DataTable from "./components/Table";
import ColumnsContextProvider from "./context/ColumnsContext-Provider";

export default function Home() {

  return (
    <main className="parent-container">
      <SideBar/>   {/*this is the sidebar component defined in the components folder*/}
      <div className="flex flex-col items-center h-screen w-full">
        <ColumnsContextProvider>   {/*this is the context provider declared to handle the rop drilling situation to edit the visible column*/}
        <Navbar/>   {/*this is the navbar component */}    
        <DataTable />   {/* this is the table component declared in the components folder*/}
        </ColumnsContextProvider>
      </div>
    </main>
  );
}
