import React from "react"
import styles from "../components/social.module.css"
import linkedIn from "../images/linkedin.png"

console.log(styles)

const Social = () => (
    <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/andrew-brown2644/">
            <img className={styles.socialLinks} src={linkedIn} alt="LinkedIn" title="LinkedIn"/>
        </a>
    </div>
)

export default Social