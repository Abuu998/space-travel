import { useState } from "react"
import Container from "../components/container/MainContainer"
import TitleWithNumbers from "../components/text/TitleWithNumbers"
import { useSelector } from "react-redux"
import Tabs from "../components/tabs/Tabs"


const TABS = ["moon", "mars", "europa", "titan"]

function Destination() {
    const [activeTab, setActiveTab] = useState("moon")
    const destinations = useSelector(state => state.destinations)

    console.log({ destinations, activeTab })

    return (
        <section>
            <Container>
                <TitleWithNumbers
                    className=""
                    number={1}
                    label="Pick your destination"
                />
                <div className="flex flex-col gap-20 md:flex-row md:justify-between">
                    <div>
                        <img 
                            src={destinations.find(dest => dest.name.toLowerCase() === activeTab)?.images?.png} 
                            alt={`${destinations.find(dest => dest.name.toLowerCase() === activeTab)?.name} Image`} 
                        />
                    </div>
                    <div>
                        <Tabs tabs={TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <div>
                            
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Destination