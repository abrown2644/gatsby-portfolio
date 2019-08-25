import React from "react"
import { useMediaQuery } from 'react-responsive'
import styles from "./navigation.module.css"
import { Link } from "gatsby"
import avatar from "../images/avatar.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import {faFolder} from "@fortawesome/free-solid-svg-icons"


class Navigation extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            active1: true,
            active2: true,
            active3: true,
            active4: true,
        }
    }
    render() {

        const navItem = {
            display: "flex",
            padding: "3px",
            justifyContent: "space-between",
            backgroundColor: "#0d1f2d",
            borderRadius: "10px",
            border: "2px solid #254259",
        }

        const activeNav = {
            backgroundColor: "#254259",
        }

        
        return (
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div className={styles.top}>
                    {/* <Social/> */}
                    <img src={avatar} className={styles.avatar} alt="Andrew Brown"></img>
                    <p className={styles.topName}>Andrew Brown</p>
                    <p className={styles.topTitle}>Front End Web Developer</p>
                    </div>
                    <ul>
                    <li><Link to="/" activeStyle={activeNav} style={navItem}><FontAwesomeIcon icon={faHome} size="2x" className={styles.navIcons}/><p className={styles.navText} className={`${styles.navText}`}>Home</p></Link><span id="one" className={styles.dot}></span></li>
                    <li><Link to="about" activeStyle={activeNav} style={navItem}><FontAwesomeIcon icon={faUser} size="2x" className={styles.navIcons}/><p className={styles.navText}>About</p></Link><span id="two" className={styles.dot}></span></li>
                    <li><Link to="skills" activeStyle={activeNav} style={navItem}><FontAwesomeIcon icon={faPen} size="2x" className={styles.navIcons}/><p className={styles.navText}>Skills</p></Link><span id="three" className={styles.dot}></span></li>
                    <li><Link to="portfolio" activeStyle={activeNav} style={navItem}><FontAwesomeIcon icon={faFolder} size="2x" className={styles.navIcons}/><p className={styles.navText}>Portfolio</p></Link><span id="four" className={styles.dot}></span></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation