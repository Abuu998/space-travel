import { useEffect, useState } from "react"
import SliderIndicator from "./SliderIndicator"

function Slider({ 
    className="", 
    autoPlay=true, 
    interval=3500, 
    children: slides,
    changeIndex=()=>{},
    ...props 
}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex(curr => curr === slides.length - 1 ? 0 : curr + 1)
    }

    // const previous = () => {
    //     setCurrentIndex(curr => curr === 0 ? slides.length - 1 : curr - 1)
    // }


    useEffect(() => {
        if (!autoPlay) return

        changeIndex(currentIndex)

        const ID = setInterval(next, interval)

        return () => clearInterval(ID)
    }, [currentIndex])


    return (
        <div
            className="flex items-center justify-center gap-4 lg:mt-16 lg:justify-start"
        >
            {slides.map((m, index) => (
                <SliderIndicator 
                    key={m?.role}
                    className={index === currentIndex ? "active" : ""}
                    onClick={() => setCurrentIndex(index)}
                    {...props}
                />
            ))}
        </div>
    )
}

export default Slider