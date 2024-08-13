import MainContainer from "../components/container/MainContainer"
import MainHeading from "../components/text/MainHeading"
// import Heading5 from "../components/text/Heading5"


function Home() {
    return (
        <section>
            <MainContainer className="border border-solid border-red-500">
                <MainHeading>Home Page</MainHeading>
            </MainContainer>
        </section>
    )
}

export default Home