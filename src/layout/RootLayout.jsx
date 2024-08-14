import { Outlet, useLocation } from "react-router-dom"
import Mobile from "../components/navigation/Mobile"
import Header from "../components/header/Header"
import { getLocationName } from "../helpers/backgroundImages"

function RootLayout() {
    const location = useLocation()

    return (
        <>
            <Mobile />
            <div 
                className="min-h-full pt-4 sm:pt-0 md:pt-4"
                id={getLocationName(location.pathname)}
            >
                <Header />
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout