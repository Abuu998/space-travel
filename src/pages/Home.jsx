import Container from "../components/container/MainContainer"
import MainHeading from "../components/text/MainHeading"
import Heading5 from "../components/text/Heading5"
import MainButton from "../components/buttons/MainButton"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"


const containerVars = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            x: {
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
            },
            ease: "easeInOut",
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        x: "-100vh",
        transition: {
            x: {
                ease: "easeInOut",
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        }
    }
}


const buttonVars = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: "easeInOut",
            delay: 0.2,
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5
        }
    }
}



function Home() {
    const navigate = useNavigate()

    return (
        <section>
            <Container className="grid md:grid-cols-2 gap-16 sm:gap-28 sm:justify-center md:justify-items-center md:place-items-end">
                <AnimatePresence mode="wait">
                    <motion.div 
                        className="text-center max-w-lg"
                        variants={containerVars}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Heading5 className="">SO, YOU WANT TO TRAVEL TO</Heading5>
                        <MainHeading className="mt-6 mb-4 text-6xl">space</MainHeading>
                        <p className="text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </motion.div>
                </AnimatePresence>
                <div className="grid justify-center items-center max-w-lg lg:align-items-end">
                    <AnimatePresence mode="wait">
                        <MainButton 
                            onClick={() => navigate("/destination")}
                            variants={buttonVars}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            Explore
                        </MainButton>
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    )
}

export default Home