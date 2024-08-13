

function Heading5({ className, children, ...props }) {
    return (
        <h5
            className={`text-lg sm:text-xl md:text-[1.75rem] tracking-[2px] text-secondary ${className}`}
            {...props}
        >
            {children}
        </h5>
    )
}

export default Heading5