import ProjectDetail from '../../components/project-detail'
import { projects } from '../../data/portfolio'

const AlerteRouge = () => (
  <ProjectDetail
    project={projects.find(project => project.slug === 'alerterouge')}
  />
)

export default AlerteRouge
