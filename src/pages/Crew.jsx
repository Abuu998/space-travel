import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getLocationName } from "../helpers/backgroundImages"

function Crew() {
    const location = useLocation()

    // useEffect(() => {
    //     console.log(getLocationName(location.pathname))
    // }, [location.pathname])

    return (
        <section>Crew</section>
    )
}

export default Crew