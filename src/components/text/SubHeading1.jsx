

function SubHeading1({ className, children, ...props }) {
    return (
        <div
            className={`text-[1.75rem] ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default SubHeading1