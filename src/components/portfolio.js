import React from "react"
import styles from "../components/portfolio2.module.css"

import site1 from "../images/websites/wraplabz.jpg"
import site2 from "../images/websites/signsnearby.jpg"
import site3 from "../images/websites/mentalhealthfl.jpg"
import site4 from "../images/websites/moro.jpg"
import site5 from "../images/websites/gssf.jpg"
import site6 from "../images/websites/bits.jpg"
import site7 from "../images/websites/trophycase.jpg"
import site8 from "../images/websites/iplgroup.jpg"
import site9 from "../images/websites/gannons.jpg"
import site10 from "../images/websites/becerra.jpg"

class Portfolio extends React.Component {

    render() {

        //inline styles for both screens vv
        let imageStyle = {
            display: 'block'
        }

        let techStyle = {
            display: 'none'
        }

        //TV one
        function changeTV1() {
            let screen1 = document.getElementById('screen1');
            let screen2 = document.getElementById('screen2');

            console.log('button works');

            if (screen1.style.display === "none") {
                screen1.style.display = "block"
                screen2.style.display = "none"
            } else if (screen2.style.display === "none") {
                screen2.style.display = "block"
                screen1.style.display = "none"
            }
        }
        //TV two
        function changeTV2() {
            let screen3 = document.getElementById('screen3');
            let screen4 = document.getElementById('screen4');

            console.log('button works');

            if (screen3.style.display === "none") {
                screen3.style.display = "block"
                screen4.style.display = "none"
            } else if (screen4.style.display === "none") {
                screen4.style.display = "block"
                screen3.style.display = "none"
            }
        }

        //TV three
        function changeTV3() {
            let screen5 = document.getElementById('screen5');
            let screen6 = document.getElementById('screen6');

            console.log('button works');

            if (screen5.style.display === "none") {
                screen5.style.display = "block"
                screen6.style.display = "none"
            } else if (screen6.style.display === "none") {
                screen6.style.display = "block"
                screen5.style.display = "none"
            }
        }

        //TV four
        function changeTV4() {
            let screen7 = document.getElementById('screen7');
            let screen8 = document.getElementById('screen8');

            console.log('button works');

            if (screen7.style.display === "none") {
                screen7.style.display = "block"
                screen8.style.display = "none"
            } else if (screen8.style.display === "none") {
                screen8.style.display = "block"
                screen7.style.display = "none"
            }
        }

        //TV five
        function changeTV5() {
            let screen9 = document.getElementById('screen9');
            let screen10 = document.getElementById('screen10');

            console.log('button works');

            if (screen9.style.display === "none") {
                screen9.style.display = "block"
                screen10.style.display = "none"
            } else if (screen10.style.display === "none") {
                screen10.style.display = "block"
                screen9.style.display = "none"
            }
        }

        //TV six
        function changeTV6() {
            let screen11 = document.getElementById('screen11');
            let screen12 = document.getElementById('screen12');

            console.log('button works');

            if (screen11.style.display === "none") {
                screen11.style.display = "block"
                screen12.style.display = "none"
            } else if (screen12.style.display === "none") {
                screen12.style.display = "block"
                screen11.style.display = "none"
            }
        }

        //TV seven
        function changeTV7() {
            let screen13 = document.getElementById('screen13');
            let screen14 = document.getElementById('screen14');

            console.log('button works');

            if (screen13.style.display === "none") {
                screen13.style.display = "block"
                screen14.style.display = "none"
            } else if (screen14.style.display === "none") {
                screen14.style.display = "block"
                screen13.style.display = "none"
            }
        }

        //TV eight
        function changeTV8() {
            let screen15 = document.getElementById('screen15');
            let screen16 = document.getElementById('screen16');

            console.log('button works');

            if (screen15.style.display === "none") {
                screen15.style.display = "block"
                screen16.style.display = "none"
            } else if (screen16.style.display === "none") {
                screen16.style.display = "block"
                screen15.style.display = "none"
            }
        }

        //TV nine
        function changeTV9() {
            let screen17 = document.getElementById('screen17');
            let screen18 = document.getElementById('screen18');

            console.log('button works');

            if (screen17.style.display === "none") {
                screen17.style.display = "block"
                screen18.style.display = "none"
            } else if (screen18.style.display === "none") {
                screen18.style.display = "block"
                screen17.style.display = "none"
            }
        }

        //TV ten
        function changeTV10() {
            let screen19 = document.getElementById('screen19');
            let screen20 = document.getElementById('screen20');

            console.log('button works');

            if (screen19.style.display === "none") {
                screen19.style.display = "block"
                screen20.style.display = "none"
            } else if (screen20.style.display === "none") {
                screen20.style.display = "block"
                screen19.style.display = "none"
            }
        }

        const label = "More Info"

        return (
            <div className={styles.container}>
                {/* TV one */}
                <div className={styles.card}>
                    <a href={"http://www.wraplabz.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen2" className={styles.tech} style={techStyle}>
                            <p>My role: Front End</p>
                            <p>• Built out pages</p>
                            <p>• .NET Core</p>
                        </div>
                        <img id="screen1" className={styles.image} style={imageStyle} src={site1}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV1} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV two */}
                <div className={styles.card}>
                    <a href={"http://www.signsnearby.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen4" className={styles.tech} style={techStyle}>
                            <p>My role: Front End</p>
                            <p>• Built pages</p>
                            <p>• .NET Core</p>
                        </div>
                        <img id="screen3" className={styles.image} style={imageStyle} src={site2}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV2} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV three */}
                <div className={styles.card}>
                    <a href={"http://mentalhealthfl.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen6" className={styles.tech} style={techStyle}>
                            <p>My role: Front End</p>
                            <p>• Built pages</p>
                            <p>• .NET Core</p>
                        </div>
                        <img id="screen5" className={styles.image} style={imageStyle} src={site3}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV3} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV four */}
                <div className={styles.card}>
                    <a href={"http://www.wraplabz.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen8" className={styles.tech} style={techStyle}>
                            <p>My role: The friend that codes</p>
                            <p>• WIP static site for a friend</p>
                            <p>• Bootstrap site</p>
                        </div>
                        <img id="screen7" className={styles.image} style={imageStyle} src={site4}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV4} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV five */}
                {/* <div className={styles.card}>
                    <a href={"http://www.wraplabz.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen10" className={styles.tech} style={techStyle}>
                            <p>tech, tech, tech</p>
                        </div>
                        <img id="screen9" className={styles.image} style={imageStyle} src={site5}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV5} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div> */}

                {/* TV six */}
                <div className={styles.card}>
                    <a href={"http://www.wraplabz.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen12" className={styles.tech} style={techStyle}>
                            <p>My role: All me!</p>
                            <p>• Progressive web app i'm building</p>
                            <p>&nbsp;&nbsp;in React</p>
                            <p>• Dynamic content</p> 
                        </div>
                        <img id="screen11" className={styles.image} style={imageStyle} src={site6}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV6} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV seven */}
                <div className={styles.card}>
                    <a href={"http://4trophycase.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen14" className={styles.tech} style={techStyle}>
                            <p>My role: Front End</p>
                            <p>• Designed</p>
                            <p>• Built</p>
                            <p>• Bootstrap</p>
                        </div>
                        <img id="screen13" className={styles.image} style={imageStyle} src={site7}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV7} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV eight */}
                <div className={styles.card}>
                    <a href={"http://test.snworks.com/iplgroup/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen16" className={styles.tech} style={techStyle}>
                            <p>My role: Front End</p>
                            <p>• WIP site</p>
                            <p>• Designed</p>
                            <p>• Built</p>
                        </div>
                        <img id="screen15" className={styles.image} style={imageStyle} src={site8}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV8} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV nine */}
                <div className={styles.card}>
                    <a href={"https://www.gannonsantiques.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen18" className={styles.tech} style={techStyle}>
                            <p>My role: Designer</p>
                            <p>• Designed the sites UI / layout</p>
                        </div>
                        <img id="screen17" className={styles.image} style={imageStyle} src={site9}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV9} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

                {/* TV ten */}
                <div className={styles.card}>
                    <a href={"https://www.becerraconstruction.com/"} target={"_blank"} rel={"noopen"}>
                        <div id="screen20" className={styles.tech} style={techStyle}>
                            <p>My role: Designer</p>
                            <p>• Designed the site layout</p>
                        </div>
                        <img id="screen19" className={styles.image} style={imageStyle} src={site10}></img>
                        </a>
                    <div className={styles.bottom}>
                        <div className={styles.bottomLeft}>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                            <span className={styles.cardFakeBtn}></span>
                        </div>
                        <div className={styles.bottomRight}>
                            <button onClick={changeTV10} className={styles.cardBtn}>{label}</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Portfolio