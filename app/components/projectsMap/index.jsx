import projectsList from "./projectsList"
import Styles from "./projectsMap.module.scss"
import Link from "next/link"

const ProjectsMap = () => {

  return (
    <div>
    {projectsList.map((project, index) => (
      <div className={Styles.projectCard} key={index}>
        <h3 className={Styles["projectCard__title"]}>{project.title}</h3>
        <p className={Styles["projectCard__summary"]}>{project.summary}</p>
        <p className={Styles["projectCard__description"]}>{project.description}</p>
        <Link href={project.githubLink}>GitHub Link</Link>
        <img className={Styles["projectCard__image"]} src={project.image} alt={project.title} />
      </div>
    ))}
  </div>
  )
}

export default ProjectsMap