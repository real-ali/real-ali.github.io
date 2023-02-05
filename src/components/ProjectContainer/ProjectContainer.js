import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name.toUpperCase().replaceAll('_', ' ')}</h3>

    <p className='project__description'>{project.description}</p>


     {project.language && (
      <div
        href={project.sourceCode}
       className='project__stack'
      >
       Language: {project.language}
      </div>
    )}

    {project.html_url && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

  
  </div>
)

export default ProjectContainer
