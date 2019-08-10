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
                    <div className={[styles.row, styles.row1].join}>
                        <img className={styles.icon} src={phone}></img>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Responsive Design.</h2>
                            <p className={styles.subTitle}>Mobile first? How about mobile at the same time O.o</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nunc nec leo leo. Curabitur ut quam sit amet leo condimentum dapibus vitae a nibh. </p>
                        </div>    
                    </div>

                    <div className={[styles.row, styles.row2].join}>
                        <img className={styles.icon} src={code}></img>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Modern Practices.</h2>
                            <p className={styles.subTitle}>Modern problems require modern solutions.</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nunc nec leo leo. Curabitur ut quam sit amet leo condimentum dapibus vitae a nibh. Sed fac
                            ilisis pellentesque urna. Proin nibh mauris, interdum eu justo id,feugiat gravida turpis.</p>
                        </div>
                    </div>

                    <div className={[styles.row, styles.row3].join}>
                        <img className={styles.icon} src={team}></img>
                        <div className={styles.content}>
                            <h2 className={styles.title}>Team Player.</h2>
                            <p className={styles.subTitle}>Hey! Same team!</p>
                            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nunc nec leo leo. Curabitur ut quam sit amet leo condimentum dapibus vitae a nibh. Sed fac
                            ilisis pellentesque urna. Proin nibh mauris, interdum eu justo id,feugiat gravida turpis.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About