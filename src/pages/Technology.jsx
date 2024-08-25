import { useState } from "react"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import Container from "../components/container/MainContainer"
import TitleWithNumbers from "../components/text/TitleWithNumbers"
import Slider from "../components/crew/slider/Slider"

function Technology() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const crew = useSelector(state => state.crew)


    return (
        <section>
            <Container>
                <TitleWithNumbers
                    className="text-xl text-center sm:text-start sm:text-2xl"
                    number={3}
                    label="Space launch 101"
                />
                <div className="flex flex-col sm:flex-col-reverse lg:flex-row-reverse lg:items-end gap-8 lg:gap-28 mt-8 md:flex-row md:justify-center">
                    <div className="border-b-2 border-b-solid border-b-secondary/5 sm:border-none">
                        
                    </div>
                    <div className="flex flex-col sm:flex-col-reverse gap-8 text-center lg:text-start">
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Technology