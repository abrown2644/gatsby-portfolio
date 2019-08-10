import React from "react"
// import { Link } from "gatsby"
import Container from "../components/container"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro"

require('../components/global.css');


const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <Intro lineOne="Andrew Brown" lineTwo="Front End Web Developer" cursor1="" cursor2="█"/>
    </Container>
  </Layout>
)

export default IndexPage
