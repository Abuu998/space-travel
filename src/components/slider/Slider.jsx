import { useEffect, useState } from "react"

function Slider({ 
    className="", 
    autoPlay=true, 
    interval=3500,
    data=[],
    children,
    changeIndex=()=>{},
    ...props 
}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex(curr => curr === data.length - 1 ? 0 : curr + 1)
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
            className={`flex items-center justify-center gap-4 ${className}`}
            {...props}
        >
            {children({ data, setSliderIndex: setCurrentIndex })}
        </div>
    )
}

export default Slider