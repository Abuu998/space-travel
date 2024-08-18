import { motion, AnimatePresence } from "framer-motion"
import { makeTwoNumber } from "../../helpers/utils"
import { NavLink } from "react-router-dom"
import NavText from "../text/NavText"


const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 }
    }
}

const navVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 }
    }
}

const pages = ["Home", "Destination", "Crew", "Technology"]

function MainNavBar() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="hidden sm:flex-1 sm:flex sm:justify-between sm:items-center"
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="h-[2px] line bg-white/5 backdrop-blur-3xl hidden lg:block -mr-8"></div>
                <motion.nav className="px-8 bg-white/5 backdrop-blur-3xl md:pr-12 md:pl-16" variants={navVariants}>
                    <ul className="flex gap-6 md:gap-8 items-center justify-start">
                        {
                            pages.map((p, index) => (
                                <li key={p} className="relative main-navlink transition-all duration-300 ease-in-out">
                                    <NavLink to={p === "Home" ? "/" : `/${p.toLowerCase()}`} className="py-8 inline-block">
                                        <NavText className="text-lg font-semibold lg:flex lg:items-center gap-2">
                                            <span className="hidden lg:inline-block">{makeTwoNumber(index)}</span>
                                            <span className="ml-4 sm:ml-0">{p}</span>
                                        </NavText>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </motion.nav>
            </motion.div>
        </AnimatePresence>
    )
}

export default MainNavBar