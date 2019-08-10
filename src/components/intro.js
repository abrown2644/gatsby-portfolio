import React from "react"
import Container from "./container"
import styles from "./intro.module.css"

function Intro(props) {
    return (
        <div className={styles.intro} id="hideMe">
        <div className={styles.introText}>
        <p><strong></strong></p>
            <p><strong>{props.lineOne}<span>{props.cursor1}</span></strong></p>
            <p><strong>{props.lineTwo}<span>{props.cursor2}</span></strong></p>


            {/* <p><strong></strong></p>
            <p><strong>cat desktop/portfolio.txt</strong></p>
            <p><strong>Initializing........</strong></p>
            <p><strong>Name: Andrew Brown</strong></p>
            <p><strong>Occupation: Web Developer</strong></p>
            <p><strong>Welcome!</strong><span>█</span></p> */}
        </div>
    </div>
    )
}

export default Intro