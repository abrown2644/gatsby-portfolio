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
                    <div className={styles.row}>
                        <h2>Who <i>am I ?</i></h2>
                        <p>I am Andrew, a part-time student and full time web developer. I enjoy spending long hours on the computer building things.</p>
                    </div>

                    <div className={styles.row}>
                        <h2>Just Work Stuff</h2>
                        <p>I am currently working for Synergy Networks in Fort Myers Florida. My role is to design and build responsive websites for our clients from the ground up.</p>
                        <p>I also freelance for Webfinn, a local startup focusing on building web apps.</p>
                    </div>

                    <div className={styles.row}>
                        <h2>Whats the plan?</h2>
                        <p>I am currently working for Synergy Networks in Fort Myers Florida. My role is to design and build responsive websites for our clients from the ground up.</p>
                        <p>I also freelance for Webfinn, a local startup focusing on building web apps.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About