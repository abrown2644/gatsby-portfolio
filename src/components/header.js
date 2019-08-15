import PropTypes from "prop-types"
import React from "react"
import Navigation from "../components/navigation"


const Header = ({ siteTitle }) => (
    <Navigation/>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
