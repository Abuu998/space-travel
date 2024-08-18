

function SubHeading2({ className, children, ...props }) {
    return (
        <div
            className={`text-[.875rem] tracking-[2.5px] uppercase ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default SubHeading2