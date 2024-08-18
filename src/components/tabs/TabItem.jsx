

function TabItem({ tab="", activeTab="", className="", onClick=()=>{}, ...props }) {
    return (
        <li
            className={`${className}`}
            onClick={() => onClick(tab)}
            {...props}
        >
            {tab}
        </li>
    )
}

export default TabItem