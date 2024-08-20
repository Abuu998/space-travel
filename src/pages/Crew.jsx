import { useState } from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import Container from "../components/container/MainContainer"
import TitleWithNumbers from "../components/text/TitleWithNumbers"
import CrewDetails from "../components/crew/CrewDetails"
import Slider from "../components/crew/slider/Slider"


const imageVariant = {
    hidden: { scale: 0, opacity: 0, x: "100vw" },
    visible: {
        scale: 1,
        opacity: 1,
        x: 0,
        transition: {
            x: {
                type: "spring",
                stiffness: 120,
                damping: 30,
                ease: "easeInOut"
            },
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        x: "-100vw",
        transition: {
            x: {
                type: "spring",
                stiffness: 80,
                damping: 20,
                ease: "easeInOut"
            },
            duration: 0.5,
            ease: "easeOut"
        }
    }
}


function Crew() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const crew = useSelector(state => state.crew)

    return (
        <section>
            <Container>
                <TitleWithNumbers
                    className="text-xl text-center sm:text-start sm:text-2xl"
                    number={2}
                    label="Meet your crew"
                />
                <div className="flex flex-col sm:flex-col-reverse lg:flex-row-reverse lg:items-end gap-8 lg:gap-28 mt-8 md:flex-row md:justify-center">
                    <div className="border-b-2 border-b-solid border-b-secondary/5 sm:border-none">
                        <AnimatePresence mode="wait">
                            <motion.img
                                className="block object-contain w-[250px] sm:w-[300px] lg:w-[450px] mx-auto aspect-square"
                                src={crew[currentIndex]?.images?.png}
                                alt={`${crew[currentIndex]?.name} Portrait`}
                                variants={imageVariant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                key={`${crew[currentIndex]?.name}-key`}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="flex flex-col sm:flex-col-reverse gap-8 text-center lg:text-start">
                        <Slider 
                            changeIndex={setCurrentIndex} 
                            interval={10000}
                        >
                            { crew }
                        </Slider>
                        <CrewDetails member={crew[currentIndex]} />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Crew