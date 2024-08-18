

function MainButton({ className, onClick=()=>{}, children, ...props }) {
    return (
        <button 
            className={`font-bellefair text-2xl bg-white p-12 aspect-square uppercase text-primary font-light rounded-full main-btn ${className}`}
            onClick={onClick}
            role="link"
            {...props}
        >
            {children}
        </button>
    )
}

export default MainButton