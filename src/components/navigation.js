import React from "react"
import styles from "./navigation.module.css"
import { Link } from "gatsby"
import avatar from "../images/avatar.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {faPen} from "@fortawesome/free-solid-svg-icons"
import {faFolder} from "@fortawesome/free-solid-svg-icons"


class Navigation extends React.Component {

    render() {

        // const dot = {
        //     height: '15px',
        //     width: '15px',
        //     padding: '2px',
        //     marginRight: '10px',
        //     borderRadius: '50%',
        //     alignSelf: 'center',
        //     backgroundColor: '#001a33',
        //     border: '2px solid #002b53'
        // }

        // const activeDot = {
        //     backgroundColor: '#00ff4c',
        //     border: '2px solid #01d641'
        // }

        // const test = {
        //     backgroundColor: 'red'
        // }

        // function changeDot(e) {
        //     e.preventDefault()
        //     let target1 = document.getElementById('one')
        //     let target2 = document.getElementById('two')
        //     let target3 = document.getElementById('three')
        //     let target4 = document.getElementById('four')

        //     let page = window.location.href
        //     if(page == "http://localhost:8000/") {
        //         target2.classList.remove('activeDot')
        //         target3.classList.remove('activeDot')
        //         target4.classList.remove('activeDot')
        //         target1.classList.add('activeDot')
        //     }
 
        // }
        
        return (
            <div className={styles.container}>
                <nav className={styles.navbar}>
                    <div className={styles.top}>
                    {/* <Social/> */}
                    <img src={avatar} className={styles.avatar} alt="Andrew Brown"></img>
                    <p className={styles.topName}>Andrew Brown</p>
                    <p className={styles.topTitle}>Front End Web Developer</p>
                    </div>
                    <ul>
                    <li><Link to="/"><FontAwesomeIcon icon={faHome} size="2x" className={styles.navIcons}/><p className={styles.navText}>Home</p></Link><span id="one" className={styles.dot}></span></li>
                    <li><Link to="about"><FontAwesomeIcon icon={faUser} size="2x" className={styles.navIcons}/><p className={styles.navText}>About</p></Link><span id="two" className={styles.dot}></span></li>
                    <li><Link to="skills"><FontAwesomeIcon icon={faPen} size="2x" className={styles.navIcons}/><p className={styles.navText}>Skills</p></Link><span id="three" className={styles.dot}></span></li>
                    <li><Link to="portfolio"><FontAwesomeIcon icon={faFolder} size="2x" className={styles.navIcons}/><p className={styles.navText}>Portfolio</p></Link><span id="four" className={styles.dot}></span></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation