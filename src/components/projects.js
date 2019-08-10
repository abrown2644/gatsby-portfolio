import React from "react"
import styles from "../components/projects.module.css"
import imageData from "../components/imageData"


class Projects extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <section id={"projects"}>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <img src={} title={} alt={}></img>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects