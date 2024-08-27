import { useState } from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import Container from "../components/container/MainContainer"
import TitleWithNumbers from "../components/text/TitleWithNumbers"
import SubHeading2 from "../components/text/SubHeading2"
import Slider from "../components/slider/Slider"
import NumbersIndicator from "../components/slider/NumbersIndicator"
import TechnologyDetails from "../components/technology/TechnologyDetails"


const imageVariant = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const descriVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

function Technology() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const technology = useSelector(state => state.technology)

    
    const handleClick = (index, setSliderIndex) => {
        setSliderIndex(index)
        setCurrentIndex(index)
    }


    const sliderItems = ({ data, setSliderIndex }) => {
        return data.map((item, index) => (
            <NumbersIndicator
                key={`${item?.name}-key`}
                className={`${index === currentIndex ? "active" : ""}`}
                onClick={() => handleClick(index, setSliderIndex)}
                label={`${index + 1}`}
            />
        ))
    }


    return (
        <section>
            <Container>
                <TitleWithNumbers
                    className="text-xl text-center sm:text-start sm:text-2xl"
                    number={3}
                    label="Space launch 101"
                />
                <div className="block lg:flex lg:flex-row-reverse lg:items-center gap-8 lg:gap-28 mt-8 md:flex-row md:justify-center">
                    <div className="max-h-max inline-block">
                        <div className="w-full h-full lg:w-[450px] aspect-square"></div>
                        <AnimatePresence mode="wait">
                            <motion.picture
                                key={`${technology[currentIndex]?.name}-key`}
                                className="fixed block w-full lg:w-[450px] aspect-square inset-x-0 lg:inset-auto lg:right-0 lg:bottom-12"
                                variants={imageVariant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            
                            >
                                <source
                                    srcSet={technology[currentIndex]?.images?.portrait}
                                    media="(min-width: 768px)"
                                />
                                <img
                                    src={technology[currentIndex]?.images?.landscape}
                                    alt={`${technology[currentIndex]?.name} Landscape`}
                                />

                            </motion.picture>
                        </AnimatePresence>
                    </div>
                    <div className="text-center lg:text-start lg:flex lg:items-center lg:gap-12">
                        <Slider 
                            data={technology}
                            className="lg:flex-col lg:gap-8"
                            changeIndex={setCurrentIndex}
                            interval={10000}
                        >
                            { sliderItems }
                        </Slider>
                        <AnimatePresence mode="wait">
                            <motion.div 
                                className="flex flex-col gap-2 max-md:mt-8"
                                key={technology[currentIndex]?.name}
                                variants={descriVariant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <SubHeading2 className="">The terminology...</SubHeading2>
                                <TechnologyDetails
                                    className="max-w-[500px]"
                                    technology={technology[currentIndex]}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Technology