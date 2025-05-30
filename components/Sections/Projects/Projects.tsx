import Section from '@components/Section'
import { useLocale } from '@hooks'
import React from 'react'
import ProjectPanel from './ProjectPanel'

const Projects = () => {
  const {t} = useLocale()

  return (
    <Section id='03' title={t.sections.projects.title} path='projects' >
      <ProjectPanel 
        title="Short.me"
        imgSrc="/images/project1.jpg"
        description={t.sections.projects.shortener.description}
        tech={["Next.js", "TypeScript", "Supabase", "Tailwind"]}
        links={{ 
          github: "https://github.com/freieslebenadam/shortener", 
          web: "https://short-me-one.vercel.app/" 
        }}
      />
      <ProjectPanel reverse
        title="Code Snippets"
        imgSrc="/images/project3.jpg"
        description={t.sections.projects.snippets.description}
        tech={["Next.js", "React", "Contentful", "Tailwind"]}
        links={{ 
          github: "https://github.com/freieslebenadam/common-code-snippets", 
          web: "https://snippets.adamfr.eu/" 
        }}
      />
      <ProjectPanel title="Divider"
        imgSrc="/images/project2.jpg"
        description={t.sections.projects.divider.description}
        tech={["Next.js", "React-Context", "Tailwind"]}
        links={{ 
          github: "https://github.com/freieslebenadam/divider", 
          web: "https://divider.adamfr.eu/" 
        }}
      />
    </Section>
  )
}

export default Projects