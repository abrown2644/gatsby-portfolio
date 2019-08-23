import React from "react"
import SEO from "../components/seo"
import Container from "../components/container"
import Intro from "../components/intro"
import Skills from "../components/skills"

const SkillsPage = () => (
  <Container>
    <SEO title="Skills" />
    <Intro lineOne="Skills" lineTwo="" cursor1="█" cursor2=""/>
    <Skills/>
  </Container>
)

export default SkillsPage
