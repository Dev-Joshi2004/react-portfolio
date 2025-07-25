import React from "react";
import aboutImage from '/assets/about/aboutImage.png';
import cursorIcon from '/assets/about/cursorIcon.png';
import serverIcon from '/assets/about/serverIcon.png';
import uiIcon from '/assets/about/uiIcon.png';
import Styles from './About.module.css';

export const About = ()=> {
    return (
        <section className={Styles.about} id="about">
            <h2 className={Styles.title}>About</h2>
            <div className={Styles.aboutContent}>
                <img src={aboutImage} alt="Me sitting with a Laptop" className={Styles.aboutImage}/>
                <ul className={Styles.aboutList}>
                    <li className={Styles.aboutListItem}>
                        <img src={cursorIcon} alt="cursor icon" />
                        <div className={Styles.aboutListItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive website and optimised sites.</p>
                        </div>
                    </li>

                    <li className={Styles.aboutListItem}>
                        <img src={serverIcon} alt="server icon" />
                        <div className={Styles.aboutListItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience developing fast and optimised backend and APIs.</p>
                        </div>
                    </li>

                    <li className={Styles.aboutListItem}>
                        <img src={uiIcon} alt="ui icon" />
                        <div className={Styles.aboutListItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing page and have created designed as well.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}