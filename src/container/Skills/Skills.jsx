import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import { Tooltip as ReactTooltip } from 'react-tooltip';

import './Skills.scss';
import { useToggle } from '../../context/ToggleProvider';


const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const { isOn } = useToggle();

   useEffect(() => {
      const query = '*[_type == "experiences"]';
      const skillsQuery = '*[_type == "skills"]';

      client.fetch(query)
        .then((data) => {
          console.log(data);
          setExperience(data);
        })

     client.fetch(skillsQuery)
        .then((data) => {
          setSkills(data);
        })
    }, [])

  return (
    <>
      <h2 className={isOn ? 'head-text' : 'head-text dark'}>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{  duration: 0.5 }}

              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'> {skill.name} </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {console.log( 'here',  experience.works)}
          {experience?.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className={isOn ? 'bold-text' : 'bold-text dark'}>{experience.year}</p>
              </div>

              <motion.div
              className={isOn ? 'app__skills-exp-works' : 'app__skills-exp-works dark'}
              >
                {experience.works.map((work) => (
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{  duration: 0.5 }}
                  className={isOn ? 'app__skills-exp-work' : 'app__skills-exp-work dark'}
                  data-tooltip-id={work.name}
                  data-tooltip-content={work.desc}
                  key={work.name}
                >
                  <h4 className={isOn ? 'bold-text' : 'bold-text dark'}> {work.name} </h4>
                  <p className='p-text'> {work.company} </p>
                </motion.div>

                <ReactTooltip
                  id={work.name}
                  effect='solid'
                  arrowColor='#fff'
                  className='skills-tooltip'
                >
                  {work.desc}
                </ReactTooltip>
              </>
                ))}
              </motion.div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills', "app__whitebg"
);