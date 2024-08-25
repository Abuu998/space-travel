import { useMobileNav } from "../../context/MobileNav"
import { AnimatePresence, motion } from "framer-motion"
import { makeTwoNumber } from "../../helpers/utils"
import { NavLink } from "react-router-dom"
import NavText from "../text/NavText"


const container = {
    hidden: { x: "100vw" },
    visible: {
        x: 0,
        transition: { duration: 0.5 }
    },
    exit: { 
        x: "100vw",
        transition: { duration: 0.5 } 
    }
}

const svgVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: { 
        opacity: 0 
    }
}

const pathVariant = {
    hidden: { 
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 0.5,
            duration: 1,
            ease: "easeInOut"
        }
    }
}


const PAGES = ["Home", "Destination", "Crew", "Technology"]


function Mobile() {
    const { isOpen, close } = useMobileNav()

    return (
        <AnimatePresence mode="wait">
            {
                isOpen && (
                    <motion.div
                        className="fixed top-0 bottom-0 right-0 left-1/4 bg-white/5 backdrop-blur-xl sm:hidden"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div
                            className="grid p-4 pt-8"
                        >
                            <motion.svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="21" 
                                onClick={() => close()} 
                                variants={svgVariant} 
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="justify-self-end"
                            >
                                <g fill="#D0D6F9" fillRule="evenodd">
                                    <motion.path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" variants={pathVariant} />
                                    <motion.path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" variants={pathVariant} />
                                </g>
                            </motion.svg>
                        </div>
                        <ul className="mt-12 pl-8 grid gap-5">
                            { PAGES.map((p, index) => (
                                <li key={p} className="relative mobile-navlink" onClick={() => close()}>
                                    <NavLink to={p === "Home" ? "/" : `/${p.toLowerCase()}`}>
                                        <NavText className="text-lg font-semibold">
                                            <span>{makeTwoNumber(index)}</span>
                                            <span className="ml-4">{p}</span>
                                        </NavText>
                                    </NavLink>
                                </li>
                            )) }
                        </ul>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Mobile