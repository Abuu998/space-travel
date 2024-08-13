

function SecondHeading({ className, children, ...props }) {
    return (
        <h2
            className={`text-4xl sm:text-7xl md:text-[6.25rem] ${className}`}
            {...props}
        >
            {children}
        </h2>
    )
}

export default SecondHeading