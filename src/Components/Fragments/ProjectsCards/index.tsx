import Projects from "../../../Data/projects"

const ProjectsCards = () => {

  const projectsArray = Projects()

  return (
    <div>
      {projectsArray.map((project, index)=>{
        return(
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        )
      })}
    </div>
  )
}

export default ProjectsCards