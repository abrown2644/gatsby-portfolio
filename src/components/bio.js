import React from "react"
import styles from "../components/bio.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

class Bio extends React.Component {
    render() {
        return(
            <div className={styles.container}>
             <p className={styles.bioText}>I'm a web developer who builds fast, responsive web apps with a focus on intuitive design. Send me an email, find me on LinkedIn or download my resume. Talk to you soon!</p>
             <div className={styles.bioButtons}>
                 <ul>
                     <li id={styles.linkOne} ><a href="mailto:abrown2644@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="3x" className={styles.bioIcon} title={"Email Me"} alt="Email Me"/></a><p className={styles.bioButtonsText}>Email Me</p></li>
                     <li id={styles.linkTwo} ><a href="https://www.linkedin.com/in/andrew-brown2644/" rel="noopener" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size="3x" className={styles.bioIcon} title={"See My LinkedIn"} alt="My LinkedIn"/></a><p className={styles.bioButtonsText}>LinkedIn</p></li>
                     <li id={styles.linkThree} ><a href="../images/resume.pfd"><FontAwesomeIcon icon={faArrowDown} size="3x" className={styles.bioIcon} title={"Download Resume"} alt="Download Resume"/></a><p className={styles.bioButtonsText}>Resume</p></li>
                 </ul>
             </div>
            </div>
        )
    }
}

export default Bio