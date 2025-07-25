import React from "react";
import emailIcon from "/assets/contact/emailIcon.png";
import githubIcon from "/assets/contact/githubIcon.png";
import linkedinIcon from "/assets/contact/linkedinIcon.png";
import Styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={Styles.contact} id="contact">
            <div className={Styles.contactHeader}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={Styles.conatctList}>
                <li className={Styles.contactLink}>
                    <img src={emailIcon} alt="Email Icon" />
                    <a href="mailto:devjoshi981852@gmail.com">devjoshi981852@gmail.com</a>
                </li>
                <li className={Styles.contactLink}>
                    <img src={githubIcon} alt="Github Icon" />
                    <a href="https://github.com/Dev-Joshi2004" target="_blank">github.com/Dev-Joshi2004</a>
                </li>
                <li className={Styles.contactLink}>
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/dev-joshi-069870370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Linkedin.com/Dev Joshi</a>
                </li>
            </ul>
        </footer>
    )
}