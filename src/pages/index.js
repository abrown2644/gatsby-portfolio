import React from "react"
// import { Link } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Bio from "../components/bio"

require('../components/global.css');


const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <Intro lineOne="Welcome! I'm Andrew." lineTwo="" cursor1="█" cursor2=""/>
      <Bio/>
    </Container>
  </Layout>
)

export default IndexPage
