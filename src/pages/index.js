import React from "react"
import Container from "../components/container"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Bio from "../components/bio"

import '../components/main.css'


class IndexPage extends React.Component {

  render() {

    return ( 
      <Container>
        <SEO title="Home" />
        <Intro lineOne="Hi, I'm Andrew!" lineTwo="" cursor1="█" cursor2=""/>
        <Bio/>
      </Container>
    )
  }
}
  
export default IndexPage