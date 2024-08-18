import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import Container from "../components/container/MainContainer"
import TitleWithNumbers from "../components/text/TitleWithNumbers"
import Tabs from "../components/tabs/Tabs"
import TabInformation from "../components/tabs/TabInformation"


const TABS = ["moon", "mars", "europa", "titan"]

const imageVariant = {
    hidden: { scale: 0,  rotate: 360 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.7,
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

function Destination() {
    const [activeTab, setActiveTab] = useState("moon")
    const destinations = useSelector(state => state.destinations)

    return (
        <section>
            <Container>
                <TitleWithNumbers
                    className="text-xl text-center sm:text-start sm:text-2xl"
                    number={1}
                    label="Pick your destination"
                />
                <div className="flex flex-col gap-28 mt-8 md:flex-row md:justify-center">
                    <div className="grid place-content-center max-w-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                className="block object-contain w-[250px] sm:w-[300px] lg:w-[450px] aspect-square"
                                variants={imageVariant}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                src={destinations.find(dest => dest.name.toLowerCase() === activeTab)?.images?.png} 
                                alt={`${destinations.find(dest => dest.name.toLowerCase() === activeTab)?.name} Image`}
                                key={activeTab}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="max-w-[500px]">
                        <Tabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <AnimatePresence mode="wait">
                            <TabInformation 
                                key={activeTab} 
                                data={destinations.find(dest => dest?.name.toLowerCase() === activeTab)}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Destination