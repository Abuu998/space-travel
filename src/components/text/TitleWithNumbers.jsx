

function TitleWithNumbers({ className, number, label, ...props }) {
    return (
        <div
            className={`font-barlow-condensed uppercase tracking[2px] text-[1.75rem] ${className}`}
            {...props}
        >
            <span className="text-white/25 mr-[.6rem] font-semibold">{number}</span>
            <span>{label}</span>
        </div>
    )
}

export default TitleWithNumbers