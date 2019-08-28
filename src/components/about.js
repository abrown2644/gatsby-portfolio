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
                    <h2 className={styles.rowTitle}>Who am I?</h2>
                    <div className={styles.row}>
                        <p>I'm a part time e-student and full time web developer. I love creating web apps and I'm always looking for a new project or technology to dive into.
                            When I'm not writing code you may find me listening to an audio book, playing a flight sim or drafting some design assets for a side project. There's a thin line between work and play!
                        </p>
                    </div>

                    <h2 className={styles.rowTitle}>Work Stuff</h2>
                    <div className={styles.row}>
                        <p>I work for Synergy Networks in Fort Myers Florida. My role is to design and build responsive websites for our clients from the ground up.</p>
                        <p>I frequently do freelance work for Webfinn in my free time, a local startup focusing on building web apps and APIs for businesses.</p>
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