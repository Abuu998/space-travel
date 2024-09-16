import { motion } from "framer-motion"

function MainButton({ className, onClick=()=>{}, variants, initial, animate, exit, children, ...props }) {
    return (
        <motion.button
            className={`font-bellefair text-2xl bg-white p-12 aspect-square uppercase text-primary font-light rounded-full main-btn ${className}`}
            onClick={onClick}
            role="link"
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export default MainButton