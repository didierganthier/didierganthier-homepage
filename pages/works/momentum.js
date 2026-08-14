import ProjectDetail from '../../components/project-detail'
import { projects } from '../../data/portfolio'

const Momentum = () => (
  <ProjectDetail
    project={projects.find(project => project.slug === 'momentum')}
  />
)

export default Momentum
