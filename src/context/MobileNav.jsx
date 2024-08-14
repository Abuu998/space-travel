import { useState } from "react"
import { createContext, useContext } from "react"


const MobileNavContext = createContext()


function MobileNavProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    return (
        <MobileNavContext.Provider value={{ isOpen, open, close }}>
            {children}
        </MobileNavContext.Provider>
    )
}

export default MobileNavProvider


export const useMobileNav = () => {
    return useContext(MobileNavContext)
} 