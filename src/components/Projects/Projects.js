import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const [repoData, setRepoData] = useState()

  async function repoDataURL() {
    //Get repo data about github user
    await fetch('https://api.github.com/users/real-ali/repos')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result)

          const list = result.map((project) =>
            !project.fork ? (
              <ProjectContainer key={uniqid()} project={project} />
            ) : (
              <></>
            )
          )
          setRepoData(list)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  useEffect(() => {
    repoDataURL()
  }, [])

  // if (getRepos.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>{repoData}</div>
    </section>
  )
}

export default Projects
