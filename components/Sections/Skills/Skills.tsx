import Section from '@components/Section'
import { useLocale } from '@hooks'
import { ITab } from '@interfaces'
import React, { useState } from 'react'
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiSass, SiTailwindcss, SiGatsby, SiPhp, SiMysql, SiSymfony, SiPostgresql, SiNestjs, SiCsharp, SiNodedotjs, SiNpm, SiComposer, SiGit, SiJirasoftware, SiNette, SiDocker } from 'react-icons/si'
import SkillsTabContext from './SkillsTabContext'
import SkillsTabs from './SkillsTabs'


const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend")
  const {t} = useLocale()

  const tabs: ITab[] = [
    { 
      id: 1,
      name: "frontend", 
      title: t.sections.skills.tabs.frontend, 
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
      title: t.sections.skills.tabs.backend,
      items: [
        { id: 10, title: "PHP5", icon: <SiPhp /> },
        { id: 11, title: "MySQL", icon: <SiMysql /> },
        { id: 12, title: "Symfony", icon: <SiSymfony /> },
        { id: 13, title: "Node.js", icon: <SiNodedotjs /> },
        { id: 14, title: "Nette", icon: <SiNette /> },
        { id: 15, title: "Postgres", icon: <SiPostgresql /> },
        { id: 16, title: "NestJs", icon: <SiNestjs /> },
      ]
    },
    {
      id: 3,
      name: "other",
      title: t.sections.skills.tabs.other,
      items: [
        { id: 17, title: "C#", icon: <SiCsharp /> },
        { id: 18, title: "npm", icon: <SiNpm /> },
        { id: 19, title: "Docker", icon: <SiDocker /> },
        { id: 20, title: "Composer", icon: <SiComposer /> },
        { id: 21, title: "Git", icon: <SiGit /> },
        { id: 22, title: "Jira", icon: <SiJirasoftware /> },
      ]
    }
  ]

  return (
    <div className='max-w-2xl mx-auto min-h-[80vh]'>
      <Section id='02' title={t.sections.skills.title} path='skills' >
        <p className='font-medium text-secondary-500'>{t.sections.skills.description}</p>
        <div className='flex flex-col my-10'>
          <SkillsTabs tabs={tabs} changeTab={setActiveTab} activeTab={activeTab} />
          <SkillsTabContext items={tabs.find(tab => tab.name === activeTab)?.items} />
        </div>
      </Section>
    </div>
  )
}

export default Skills