import React from "react";
import projects from "../Data/Projects.json"
import Styles from "./Project.module.css";

export const Project = () => {
    return (
        <section className={Styles.projectSection} id="projects">
            <h2 className={Styles.title}>Projects</h2>
            <div className={Styles.projectContainer}>
                {
                    projects.map((project, id)=> {
                        return (
                            <div key={id} className={Styles.projectContent}>
                                <img src={project.imageSrc} alt={`Image of ${project.title}`} 
                               className={Styles.projectImage} />
                                <h3 className={Styles.projectTitle}>{project.title}</h3>
                                <p className={Styles.projectDescription}>{project.description}</p>
                                <ul className={Styles.projectSkillsList}>
                                    {
                                        project.skills.map((skill, index)=>{
                                            <li key={index} className={Styles.projectSkill}>
                                                {skill}
                                            </li>
                                        })
                                    }
                                </ul>
                                <div className={Styles.projectLinks}>
                                    <a href={project.demo} className={Styles.projectLink}>Demo</a>
                                    <a href={project.source} className={Styles.projectLink}>Source</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}