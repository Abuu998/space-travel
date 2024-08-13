

function ForthHeading({ className, children, ...props }) {
    return (
        <h4
            className={`text-lg sm:text-2xl md:text-[2rem] ${className}`}
            {...props}
        >
            {children}
        </h4>
    )
}

export default ForthHeading