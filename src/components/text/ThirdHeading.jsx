

function ThirdHeading({ className, children, ...props }) {
    return (
        <h3
            className={`text-2xl sm:text-4xl md:text-[3.5rem] ${className}`}
            {...props}
        >
            {children}
        </h3>
    )
}

export default ThirdHeading