import React from "react"
import phone from "../images/phone.png"
import code from "../images/code.png"
import team from "../images/team.png"
import styles from "../components/about.module.css"

class About extends React.Component {
    render() {
        return (
            <section id={"about"}>
                <div className={styles.container}>
                    <h2 className={styles.rowTitle}>Who <i>am I ?</i></h2>
                    <div className={styles.row}>
                        <p>Me Andrew. A part-time e-student and full time web developer. I enjoy spending long hours on the computer building websites and progressive web apps.
                            When I am not working on a project
                        </p>
                    </div>

                    <h2 className={styles.rowTitle}>Just Work Stuff</h2>
                    <div className={styles.row}>
                        <p>I am currently working for Synergy Networks in Fort Myers Florida. My role is to design and build responsive websites for our clients from the ground up. Design, build and optimize.</p>
                        <p>I also do freelance work for Webfinn, a startup focusing on building apps and sites for businesses.</p>
                    </div>
                    
                    <h2 className={styles.rowTitle}>Goals</h2>
                    <div className={styles.row}>
                        <p>In my free time I love learning new things and implementing them in my work. A highlight of projects im working on right now include an online art store for a friend and my own web app that showcases a WW2 fighter Aces every week for those warbird junkies like myself.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About