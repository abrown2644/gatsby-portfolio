import React from "react"
// import { Link } from "gatsby"
import Container from "../components/container"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Bio from "../components/bio"

import '../components/main.css'


const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <Intro lineOne="I'm Andrew!" lineTwo="" cursor1="█" cursor2=""/>
    <Bio/>
  </Container>
)

export default IndexPage
