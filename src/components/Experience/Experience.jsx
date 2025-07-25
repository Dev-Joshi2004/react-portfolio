import React from "react";
import skills from "../Data/Skills.json"
import experience from "../Data/Experience.json"
import Styles from "../Experience/Experience.module.css";

export const Experience = ()=>{
    return (
        <section id="experience" className={Styles.experience}>
            <h2 className={Styles.title}>Experience</h2>
            <div className={Styles.experienceContent}>
                <div className={Styles.skills}>{
                    skills.map((skill,id)=>{
                        return <div key = {id} className={Styles.skill}>
                            <div className={Styles.skillImage}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                    } 
                </div>
                <ul className={Styles.experienceList}>
                    {experience.map((experienceItem, id)=>{
                        return (
                            <li className={Styles.experienceItems}>
                                <img src={experienceItem.imageSrc} alt={`${experienceItem.organisation} Logo`} />
                                <div className={Styles.experienceItemsDetails}>
                                    <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                                    <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                                    <ul>{experienceItem.experiences.map((exp, id)=>{
                                        return (
                                            <li key={id}>{exp}</li>
                                        )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )   
                    })}
                </ul>
            </div>
        </section>
    )
}