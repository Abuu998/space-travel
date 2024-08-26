

function NumbersIndicator({ className="", label, onClick=()=>{}, ...props }) {
    return (
        <div 
            className={`text-lg sm:text-xl w-8 sm:w-12 rounded-full grid place-items-center aspect-square border border-solid border-secondary/55 text-white hover:border-secondary cursor-pointer [&.active]:bg-white [&.active]:text-primary transition-all duration-700 ease-in-out ${className}`}
            onClick={onClick}
            {...props}
        >
            {label}
        </div>
    )
}

export default NumbersIndicator