import Section from '@components/Section'
import React from 'react'
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiSass, SiTailwindcss, SiGatsby } from 'react-icons/si'
import SkillItem from './SkillItem'

const skills = {
  fontEnd: [
    { id: 1, title: "HTML5", icon: <SiHtml5 /> },
    { id: 2, title: "CSS3", icon: <SiCss3 /> },
    { id: 3, title: "JavaScript (ES6+)", icon: <SiJavascript /> },
    { id: 4, title: "TypeScript", icon: <SiTypescript /> },
    { id: 5, title: "React", icon: <SiReact /> },
    { id: 6, title: "SASS", icon: <SiSass /> },
    { id: 7, title: "Gatsby", icon: <SiGatsby /> },
    { id: 8, title: "Tailwind", icon: <SiTailwindcss /> },
    { id: 9, title: "Next.js", icon: <SiNextdotjs /> },
  ],
  backEnd: [

  ],
  other: [

  ]
}

const Skills = () => {
  return (
    <div className='max-w-2xl mx-auto pb-5 pt-2'>
      <Section id='02' title='What I can do' path='skills' >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, fuga? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, quae.</p>
        <div className='flex flex-col my-10'>
          <div className='flex-none w-full flex gap-5'>
            <div className='flex-auto border-b-2 border-secondary-400 flex items-center justify-center py-2 transition-all hover:border-primary-400 rounded-t'>
              <h5 className='font-mono font-medium text-primary-400'>Front-End</h5>
            </div>
            <div className='flex-auto border-b-2 border-secondary-400 flex items-center justify-center py-2 transition-all hover:border-primary-400 rounded-t'>
              <h5 className='font-mono font-medium text-primary-400'>Back-End</h5>
            </div>
            <div className='flex-auto border-b-2 border-secondary-400 flex items-center justify-center py-2 transition-all hover:border-primary-400 rounded-t'>
              <h5 className='font-mono font-medium text-primary-400'>Other</h5>
            </div>
          </div>
          <div className='flex-auto mt-5 grid grid-cols-2 gap-2 flex-wrap'>
            {skills.fontEnd.map((fe,index) => <SkillItem key={fe.id} span={index === skills.fontEnd.length-1 ? 2 : 1} title={fe.title} icon={fe.icon} />)}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Skills