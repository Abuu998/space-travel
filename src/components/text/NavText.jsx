

function NavText({ className, children, ...props }) {
    return (
        <div
            className={`tracking-[2.8px] uppercase ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default NavText