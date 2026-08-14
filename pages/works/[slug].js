import ProjectDetail from '../../components/project-detail'
import { projects } from '../../data/portfolio'

const ProjectPage = ({ project }) => <ProjectDetail project={project} />

export const getStaticPaths = async () => ({
  paths: projects
    .filter(project => !['alerterouge', 'momentum'].includes(project.slug))
    .map(project => ({ params: { slug: project.slug } })),
  fallback: false
})

export const getStaticProps = async ({ params }) => {
  const project = projects.find(item => item.slug === params.slug)

  return {
    props: { project }
  }
}

export default ProjectPage
