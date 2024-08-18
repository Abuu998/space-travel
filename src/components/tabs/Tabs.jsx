import TabItem from "./TabItem"


function Tabs({ tabs=[], activeTab="", setActiveTab=()=>{} }) {
    return (
        <ul className="flex items-center justify-center lg:justify-start gap-6">
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