import { motion } from "framer-motion"
import SecondHeading from "../text/SecondHeading"
import Coordinates from "./Coordinates"


const containerVars = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            x: {
                ease: "easeInOut",
                type: "spring",
                stiffness: 100,
                damping: 20
            },
            ease: "easeInOut",
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        y: "100vh",
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

function TabInformation({ data={} }) {
    return (
        <motion.div
            variants={containerVars}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden pt-8"
        >
            <SecondHeading className="text-center lg:text-start text-6xl">{data?.name}</SecondHeading>
            <p className="text-center lg:text-start mt-4">{data?.description}</p>
            <div className="mt-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-8 sm:gap-16 border-t border-t-solid border-secondary/15">
                <Coordinates
                    label="avg. distance"
                    data={data?.distance}
                />
                <Coordinates
                    label="est. travel time"
                    data={data?.travel}
                />
            </div>
        </motion.div>
    )
}

export default TabInformation