import { useState, useEffect } from "react"
import Container from "../components/container/MainContainer"
import MainHeading from "../components/text/MainHeading"
import { useLocation } from "react-router-dom"


function Home() {
    const location = useLocation()

    return (
        <section className="">
            <Container>
                <MainHeading>
                    home
                </MainHeading>
            </Container>
        </section>
    )
}

export default Home