import React from "react"
import SEO from "../components/seo"
import Container from "../components/container"
import Intro from "../components/intro"
import About from "../components/about"


const AboutPage = () => (
  <Container>
    <SEO title="About Me" />
    <Intro lineOne="About Me" lineTwo="" cursor1="█" cursor2=""/>
    <About/>
  </Container>
)

export default AboutPage
