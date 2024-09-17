

function MainContainer({ className, children }) {
    return (
        <div className={`border border-dotted border-red-500 px-4 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default MainContainer