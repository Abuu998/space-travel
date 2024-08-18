import Container from "../components/container/MainContainer"
import MainHeading from "../components/text/MainHeading"
import Heading5 from "../components/text/Heading5"
import MainButton from "../components/buttons/MainButton"
import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate()

    return (
        <section>
            <Container className="grid md:grid-cols-2 gap-16 sm:gap-28 sm:justify-center md:justify-items-center md:place-items-end">
                <div className="text-center max-w-lg">
                    <Heading5 className="">SO, YOU WANT TO TRAVEL TO</Heading5>
                    <MainHeading className="mt-6 mb-4 text-6xl">space</MainHeading>
                    <p className="text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="grid justify-center items-center max-w-lg lg:align-items-end">
                    <MainButton onClick={() => navigate("/destination")}>
                        Explore
                    </MainButton>
                </div>
            </Container>
        </section>
    )
}

export default Home