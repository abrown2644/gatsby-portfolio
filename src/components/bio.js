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
             <p className={styles.bioText}>I'm a web developer who builds fast, intuitive web apps with a focus on responsive design. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nunc ante augue, rutrum ut laoreet at, tempus at dolor.</p>
             <div className={styles.bioButtons}>
                 <ul>
                     <li id={styles.linkOne} ><a href="/"><FontAwesomeIcon icon={faEnvelope} size="3x" className={styles.bioIcon} title={"Email Me"}/></a><p className={styles.bioButtonsText}>Email Me</p></li>
                     <li id={styles.linkTwo} ><a href="/"><FontAwesomeIcon icon={faLinkedinIn} size="3x" className={styles.bioIcon} title={"See My LinkedIn"}/></a><p className={styles.bioButtonsText}>LinkedIn</p></li>
                     <li id={styles.linkThree} ><a href="/"><FontAwesomeIcon icon={faArrowDown} size="3x" className={styles.bioIcon} title={"Download Resume"}/></a><p className={styles.bioButtonsText}>Resume</p></li>
                 </ul>
             </div>
            </div>
        )
    }
}

export default Bio