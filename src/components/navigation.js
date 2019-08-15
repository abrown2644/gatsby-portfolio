import React from "react"
import styles from "./navigation.module.css"
import Social from "../components/social"
import { Link } from "gatsby"
import avatar from "../images/avatar.jpg"


class Navigation extends React.Component {

    render() {

            function changeDot(){
                let target = document.getElementsByClassName(styles.dot);
                target.classList.remove(styles.inactiveDot);
                target.classList.add(styles.activeDot);
                console.log('it worked')
        }

        return (
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div className={styles.top}>
                    {/* <Social/> */}
                    <img src={avatar} className={styles.avatar}></img>
                    <p className={styles.topName}>Andrew Brown</p>
                    <p className={styles.topTitle}>Front End Web Developer</p>
                    </div>
                    <ul>
                    <li><a href="/" onClick={changeDot}>Home</a><span className={[styles.dot, styles.inactiveDot].join('')}></span></li>
                    <li><a href="page-2" onClick={changeDot}>About</a><span className={[styles.dot, styles.inactiveDot].join('')}></span></li>
                    <li><a href="#" onClick={changeDot}>Skills</a><span className={[styles.dot, styles.inactiveDot].join('')}></span></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation