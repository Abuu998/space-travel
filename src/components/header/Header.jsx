import { useMobileNav } from "../../context/MobileNav"
import Container from "../container/MainContainer"
import ThirdHeading from "../text/ThirdHeading"
import Logo from "/logo.svg"
import Hamburger from "/icon-hamburger.svg"
import { AnimatePresence, motion } from "framer-motion"
import MainNavBar from "../navigation/MainNavBar"

const svgVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: { opacity: 0 }
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

function Header() {
    const { isOpen, open } = useMobileNav()

    return (
        <header className="py-4 sm:py-0 md:py-4 sm:flex items-center justify-between">
            <Container className="flex items-center justify-between">
                <img 
                    src={Logo}
                    alt="Logo" 
                    className="max-sm:w-10 max-sm:aspect-square object-contain block"
                />
                <AnimatePresence mode="wait">
                    { !isOpen && (
                        <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="21" 
                            className="sm:hidden"
                            variants={svgVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => open()}
                        >
                            <g fill="#D0D6F9" fillRule="evenodd">
                                <motion.path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" variants={pathVariant} />
                            </g>
                        </motion.svg>
                    )}
                </AnimatePresence>
            </Container>
            <MainNavBar />
        </header>
    )
}

export default Header