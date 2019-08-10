import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import Social from "../components/social"
import { Link } from "gatsby"
import avatar from "../images/avatar.jpg"

console.log(styles)

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
  {/* <div className={styles.nameDiv}>
  <h2 className={styles.myName}>Andrew Brown</h2>
  </div> */}

      <nav className={styles.navbar}>
        <div className={styles.top}>
          {/* <Social/> */}
          <img src={avatar} className={styles.avatar}></img>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="page-2">About</a></li>
          <li><a href="#">Skills</a></li>
        </ul>
      </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
