

function MainHeading({ className, children, ...props }) {
    return (
        <h1
            className={`text-5xl sm:text-8xl md:text-[9.375rem] ${className}`}
            {...props}
        >
            {children}
        </h1>
    )
}

export default MainHeading