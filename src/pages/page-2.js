import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Intro from "../components/intro"


const SecondPage = () => (
  <Layout>
    <Container>
      <SEO title="About Me" />
      <Intro lineOne="About Me" lineTwo="" cursor1="█" cursor2=""/>
    </Container>
  </Layout>
)

export default SecondPage
