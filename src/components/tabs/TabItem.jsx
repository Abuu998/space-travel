import NavText from "../text/NavText"

function TabItem({ tab="", activeTab="", className="", onClick=()=>{}, ...props }) {
    return (
        <li
            className={`cursor-pointer relative pb-4 ${tab === activeTab ? "active" : ""} ${className}`}
            onClick={() => onClick(tab)}
            {...props}
        >
            <NavText className="">{tab}</NavText>
        </li>
    )
}

export default TabItem