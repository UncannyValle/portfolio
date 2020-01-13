import React from "react"
import styles from "./skills.module.css"

const Skills = props => {
  return (
    <div className={styles.card}>
      <a href={props.site}>
        <img src={props.image} alt="project"></img>
      </a>
      <p>{props.text}</p>
      <p>{props.tech}</p>
      <a href={props.gitHub}>
        <button className={styles.gitHub}>GitHub</button>
      </a>{" "}
    </div>
  )
}

export default Skills
