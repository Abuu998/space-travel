

function MainContainer({ className, children }) {
    return (
        <div className={`container px-4 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default MainContainer