import TabItem from "./TabItem"


function Tabs({ tabs=[], activeTab="", setActiveTab=()=>{} }) {
    return (
        <ul className="">
            {tabs.map(tab => (
                <TabItem 
                    key={tab} 
                    tab={tab}
                    activeTab={activeTab}
                    onClick={setActiveTab}
                />
            ))}
        </ul>
    )
}

export default Tabs