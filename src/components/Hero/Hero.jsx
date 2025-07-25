import React from "react";
import Styles from "./Hero.module.css";
//import heroImg from '/assets/hero/heroImage.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import heroImg1 from "/assets/hero/Group 1.png"

export const Hero = ()=>{
    return (
        <section className={Styles.section}>
            <div className={Styles.intro}>
                <h1 className={Styles.title}>Hi, I'm Dev</h1>

                <p className={Styles.description}>I'm a passionate Full Stack Developer skilled in building responsive web apps using React, Node.js, and PostgreSQL. I'm a quick learner and team player, eager to contribute to real-world projects and grow in a dynamic tech environment.</p>

                <div className={Styles.socialLinks}>
                    <ul className={Styles.socialList}>
                        <li ><a href="https://www.linkedin.com/in/dev-joshi-069870370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><LinkedInIcon className={Styles.socialIcon}/></a></li>
                        <li ><a href="https://github.com/Dev-Joshi2004" target="_blank"><GitHubIcon className={Styles.socialIcon}/></a></li>
                        <li ><a href="https://www.instagram.com/jr.devjoshi?igsh=MXFobGJ1eXpzdnZtZw==" target="_blank"><InstagramIcon className={Styles.socialIcon}/></a></li>
                    </ul>
                </div>

                <a href="mailto:devjoshi981852@gmail.com" className={Styles.contactBtn}>Contact Me</a>
                </div>

                <img src={heroImg1} alt="Hero image of me" className={Styles.heroImg}/>

                <div className={Styles.topBlur}></div>
                <div className={Styles.bottomBlur}></div>

        </section>
    )
}