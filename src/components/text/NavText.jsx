

function NavText({ className, children, ...props }) {
    return (
        <div
            className={`tracking-[2.8px] ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default NavText