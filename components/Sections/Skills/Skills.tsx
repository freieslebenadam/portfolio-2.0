import Section from '@components/Section'
import { ITab } from '@interfaces'
import React, { useState } from 'react'
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiSass, SiTailwindcss, SiGatsby, SiPhp, SiMysql, SiSymfony, SiPostgresql, SiNestjs, SiCsharp, SiNodedotjs, SiNpm, SiComposer, SiGit, SiJirasoftware } from 'react-icons/si'
import SkillsTabContext from './SkillsTabContext'
import SkillsTabs from './SkillsTabs'

const tabs: ITab[] = [
  { 
    id: 1,
    name: "frontend", 
    title: "Front-End", 
    items: [
      { id: 1, title: "HTML5", icon: <SiHtml5 /> },
      { id: 2, title: "CSS3", icon: <SiCss3 /> },
      { id: 3, title: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { id: 4, title: "TypeScript", icon: <SiTypescript /> },
      { id: 5, title: "React", icon: <SiReact /> },
      { id: 6, title: "SASS", icon: <SiSass /> },
      { id: 7, title: "Gatsby", icon: <SiGatsby /> },
      { id: 8, title: "Tailwind", icon: <SiTailwindcss /> },
      { id: 9, title: "Next.js", icon: <SiNextdotjs /> },
    ] 
  },
  {
    id: 2,
    name: "backend",
    title: "Back-End",
    items: [
      { id: 10, title: "PHP5", icon: <SiPhp /> },
      { id: 11, title: "MySQL", icon: <SiMysql /> },
      { id: 12, title: "Symfony", icon: <SiSymfony /> },
      { id: 13, title: "Node.js", icon: <SiNodedotjs /> },
      { id: 14, title: "Postgres", icon: <SiPostgresql /> },
      { id: 15, title: "NestJs", icon: <SiNestjs /> },
    ]
  },
  {
    id: 3,
    name: "other",
    title: "Other",
    items: [
      { id: 16, title: "C#", icon: <SiCsharp /> },
      { id: 17, title: "npm", icon: <SiNpm /> },
      { id: 18, title: "Composer", icon: <SiComposer /> },
      { id: 19, title: "Git", icon: <SiGit /> },
      { id: 20, title: "Jira", icon: <SiJirasoftware /> },
    ]
  }
]

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <div className='max-w-2xl mx-auto pb-5 pt-2'>
      <Section id='02' title='What I can do' path='skills' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fuga? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quae.</p>
        <div className='flex flex-col my-10'>
          <SkillsTabs tabs={tabs} changeTab={setActiveTab} activeTab={activeTab} />
          <SkillsTabContext items={tabs.find(tab => tab.name === activeTab)?.items} />
        </div>
      </Section>
    </div>
  )
}

export default Skills