import { Outlet } from "react-router-dom";
import SideBarI from "./SideBar";

export default function Layout() {
    return (
        <div className='flex'>
            <SideBarI/>
            <main className='flex-1 p-4 bg-gray-100 min-h-screen'>
                <Outlet/>
            </main>
        </div>
    )
}