import React from "react"
import styles from "../components/skills.module.css"
import html5 from "../images/skills/html5.png"
import css3 from "../images/skills/css3.png"
import javascript from "../images/skills/javascript.png"
import bootstrap from "../images/skills/bootstrap.png"
import reactIcon from "../images/skills/react.png"
import jqueryIcon from "../images/skills/jquery.png"
import csharpIcon from "../images/skills/csharp.png"
import pythonIcon from "../images/skills/python.png"
import gitIcon from "../images/skills/git.png"
import googleIcon from "../images/skills/google.png"
import illustratorIcon from "../images/skills/illustrator.png"
import photoshopIcon from "../images/skills/photoshop.png"
import dotnetcoreIcon from "../images/skills/dotnetcore.png"

class Skills extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active1: true,
            active2: true,
            active3: true,
            active4: true,
            active5: true,
            active6: true,
            active7: true,
            active8: true,
            active9: true,
            active10: true,
            active11: true,
            active12: true,
            active13: true,
        }
    }//end constructor

    render() {

        const jsCircle = {
            backgroundColor: "#f0db4f",
        }

        const jquery = {
            backgroundColor: "white",
            color: "#0867ab",
        }

        const bs = {
            backgroundColor: "#f6f6f6",
            color: "#713cbe",
        }

        const html = {
            backgroundColor: "white",
            color: "#e44d26",
        }

        const css = {
            backgroundColor: "#1696e8",
            color: "white",
        }

        const react = {
            backgroundColor: "#222222",
            color: "#52d2f2",
        }

        const csharp = {
            backgroundColor: "white",
            color: "#953dac",
        }

        const python = {
            backgroundColor: "white",
            color: "#3475a8",
        }

        const git = {
            backgroundColor: "white",
            color: "#f05033",
        }

        const dotnetcore = {
            backgroundColor: "white",
            color: "#6d429c",
            fontSize: "18px",
        }

        const photoshop = {
            backgroundColor: "#15122e",
            color: "white",
            fontSize: "15px",
        }

        const illustrator = {
            backgroundColor: "#3c2c20",
            color: "white",
            fontSize: "16px",
        }

        const google = {
            backgroundColor: "white",
            color: "#ed7406",
            fontSize: "16px",
        }

        return (
            <div className={styles.container}>
                <div className={styles.rowTitleDiv}><p className={styles.rowTitle}>Front End</p></div>
                <div className={styles.row}>
                    <div style={html} className={`${styles.skill}`} onClick={() => this.setState({active1: !this.state.active1})}>
                        <img className={this.state.active1 && styles.img || styles.nameDiv} src={html5}></img>
                        <div className={this.state.active1 && styles.nameDiv}><p style={html} className={styles.name}>HTML5</p></div>
                    </div>
                    <div style={css} className={`${styles.skill}`} onClick={() => this.setState({active2: !this.state.active2})}>
                        <img className={this.state.active2 && styles.img || styles.nameDiv} src={css3}></img>
                        <div className={this.state.active2 && styles.nameDiv}><p style={css} className={styles.name}>CSS3</p></div>
                    </div>
                    <div style={jsCircle} className={`${styles.skill}`} onClick={() => this.setState({active3: !this.state.active3})}>
                        <img className={this.state.active3 && styles.img || styles.nameDiv} src={javascript}></img>
                        <div className={this.state.active3 && styles.nameDiv}><p style={jsCircle} className={styles.name}>ES6</p></div>
                    </div>
                    <div style={bs} className={`${styles.skill}`} onClick={() => this.setState({active4: !this.state.active4})}>
                        <img className={this.state.active4 && styles.img || styles.nameDiv} src={bootstrap}></img>
                        <div className={this.state.active4 && styles.nameDiv}><p style={bs} className={styles.name}>B4</p></div>
                    </div>
                    <div style={react} className={`${styles.skill}`} onClick={() => this.setState({active5: !this.state.active5})}>
                        <img className={this.state.active5 && styles.img || styles.nameDiv} src={reactIcon}></img>
                        <div className={this.state.active5 && styles.nameDiv}><p style={react} className={styles.name}>React</p></div>
                    </div>
                    <div style={jquery} className={`${styles.skill}`} onClick={() => this.setState({active6: !this.state.active6})}>
                        <img className={this.state.active6 && styles.img || styles.nameDiv} src={jqueryIcon}></img>
                        <div className={this.state.active6 && styles.nameDiv}><p style={jquery} className={styles.name}>jQuery</p></div>
                    </div>
                </div>

                <div className={styles.rowTitleDiv}><p className={styles.rowTitle}>Back End</p></div>
                <div className={styles.row}>
                    <div style={csharp} className={`${styles.skill}`} onClick={() => this.setState({active7: !this.state.active7})}>
                        <img className={this.state.active7 && styles.img || styles.nameDiv} src={csharpIcon}></img>
                        <div className={this.state.active7 && styles.nameDiv}><p style={csharp} className={styles.name}>C#</p></div>
                    </div>
                    <div style={python} className={`${styles.skill}`} onClick={() => this.setState({active8: !this.state.active8})}>
                        <img className={this.state.active8 && styles.img || styles.nameDiv} src={pythonIcon}></img>
                        <div className={this.state.active8 && styles.nameDiv}><p style={python} className={styles.name}>Python</p></div>
                    </div>
                </div>

                <div className={styles.rowTitleDiv}><p className={styles.rowTitle}>Other</p></div>
                <div className={styles.row}>
                    <div style={git} className={`${styles.skill}`} onClick={() => this.setState({active9: !this.state.active9})}>
                        <img className={this.state.active9 && styles.img || styles.nameDiv} src={gitIcon}></img>
                        <div className={this.state.active9 && styles.nameDiv}><p style={git} className={styles.name}>Git</p></div>
                    </div>
                    <div style={dotnetcore} className={`${styles.skill}`} onClick={() => this.setState({active10: !this.state.active10})}>
                        <img className={this.state.active10 && styles.img || styles.nameDiv} src={dotnetcoreIcon}></img>
                        <div className={this.state.active10 && styles.nameDiv}><p style={dotnetcore} className={styles.name}>.NetCore</p></div>
                    </div>
                    <div style={photoshop} className={`${styles.skill}`} onClick={() => this.setState({active11: !this.state.active11})}>
                        <img className={this.state.active11 && styles.img || styles.nameDiv} src={photoshopIcon}></img>
                        <div className={this.state.active11 && styles.nameDiv}><p style={photoshop} className={styles.name}>Photoshop</p></div>
                    </div>
                    <div style={illustrator} className={`${styles.skill}`} onClick={() => this.setState({active12: !this.state.active12})}>
                        <img className={this.state.active12 && styles.img || styles.nameDiv} src={illustratorIcon}></img>
                        <div className={this.state.active12 && styles.nameDiv}><p style={illustrator} className={styles.name}>Illustrator</p></div>
                    </div>
                    <div style={google} className={`${styles.skill}`} onClick={() => this.setState({active13: !this.state.active13})}>
                        <img className={this.state.active13 && styles.img || styles.nameDiv} src={googleIcon}></img>
                        <div className={this.state.active13 && styles.nameDiv}><p style={google} className={styles.name}>Google Analytics</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills