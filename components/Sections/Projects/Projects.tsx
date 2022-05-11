import Section from '@components/Section'
import React from 'react'
import ProjectPanel from './ProjectPanel'

const Projects = () => {
  return (
    <Section id='03' title='Some of my work' path='projects' >
      <ProjectPanel 
        title="Short.me"
        imgSrc="/images/project1.jpg"
        description="A simple application for making shorter aliases for longer http links."
        tech={["Next.js", "React", "Supabase", "Tailwind"]}
        links={{ 
          github: "https://github.com/freieslebenadam/shortener", 
          web: "https://short-me-one.vercel.app/" 
        }}
      />
      <ProjectPanel reverse
        title="Code Snippets"
        imgSrc="/images/project3.jpg"
        description="A simple application for making shorter aliases for longer http links."
        tech={["Next.js", "React", "Supabase", "Tailwind"]}
        links={{ 
          github: "https://github.com/freieslebenadam/shortener", 
          web: "https://code-snippets-three.vercel.app/" 
        }}
      />
      <ProjectPanel title="Divider"
        imgSrc="/images/project2.jpg"
        description="A simple application for making shorter aliases for longer http links."
        tech={["Next.js", "React", "Supabase", "Tailwind"]}
        links={{ 
          github: "https://github.com/freieslebenadam/shortener", 
          web: "https://divider-sable.vercel.app/" 
        }}
      />
    </Section>
  )
}

export default Projects