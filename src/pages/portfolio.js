import React from "react"
import SEO from "../components/seo"
import Container from "../components/container"
import Intro from "../components/intro"
import Portfolio from "../components/portfolio"

const PortfolioPage = () => (
  <Container>
    <SEO title="Portfolio" />
    <Intro lineOne="Portfolio" lineTwo="" cursor1="█" cursor2=""/>
    <Portfolio/>
  </Container>
)

export default PortfolioPage
