

function SliderIndicator({ className="", onClick=()=>{}, ...props }) {
    return (
        <div 
            className={`w-3 aspect-square rounded-full slider-ind bg-secondary/45 hover:bg-secondary/75 cursor-pointer ${className}`}
            onClick={onClick}
            {...props}
        />
    )
}

export default SliderIndicator