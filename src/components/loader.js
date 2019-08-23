import React from "react"
import styles from "../components/loader.module.css"
import ripple from "../images/Ripple.svg"

function Loader() {
    return (
        <div className={styles.container}>
            <img className={styles.ripple} src={ripple} alt={''}></img>
        </div>
    )
}

export default Loader