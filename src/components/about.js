import React from "react"
import styles from "../components/about.module.css"
import { Link } from "gatsby"

class About extends React.Component {
    render() {
        return (
            <section id={"about"}>
                <div className={styles.container}>
                    <p className={styles.rowTitle}>Who am I?</p>
                    <div className={styles.row}>
                        <p>I'm a part time e-student and full time web developer. I love creating web apps and I'm always looking for a new project or technology to dive into.
                            When I'm not writing code you may find me listening to an audio book, playing a flight sim or drafting some design assets for a side project. There's a thin line between work and play!
                        </p>
                    </div>

                    <p className={styles.rowTitle}>Work</p>
                    <div className={styles.row}>
                        <p>I work for Synergy Networks in Fort Myers Florida. My role is to design and build responsive websites for our clients from the ground up.</p>
                        <p>I frequently do freelance work for Webfinn in my free time (say that 10 times fast), a local startup focusing on building web apps and APIs for businesses.</p>
                    </div>
                    
                    <p className={styles.rowTitle}>My Stuff</p>
                    <div className={styles.row}>
                        <p>Outside the 9-5 I love learning about new habits and tech to implement in my work. I always keep my feet moving forward, the more I learn the more fun opportunities arise. A highlight of projects I'm working on right now include an online art store for a friend and my own progressive web app that showcases a database of WW2 fighter planes and related info for those warbird junkies like myself. Check it out in my <Link to="portfolio">portfolio</Link> and see where I'm at in it's progress.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About