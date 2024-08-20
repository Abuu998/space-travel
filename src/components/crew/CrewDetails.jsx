import { useEffect } from "react"
import ForthHeading from "../text/ForthHeading"
import { motion, AnimatePresence, useCycle } from "framer-motion"


const container = {
    animationOne: {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.4
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.5,
            }
        }
    },
    animationTwo: {
        hidden: { opacity: 0, x: "100vw" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            x: "-100vw",
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        }
    }
}


function CrewDetails({ member={}, className="", ...props }) {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

    useEffect(() => {
        const id = setInterval(() => cycleAnimation(), 300000)

        return () => clearInterval(id)
    }, [animation])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className={`max-w-md mx-auto ${className}`}
                {...props}
                variants={container[animation]}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={member?.role}
            >
                <span className="text-gray-400 uppercase text-sm sm:text-base lg:text-lg tracking-wider font-bellefair">
                    {member?.role}
                </span>
                <ForthHeading className="text-xl py-2">{member?.name}</ForthHeading>
                <p>{member?.bio}</p>
            </motion.div>
        </AnimatePresence>
    )
}

export default CrewDetails