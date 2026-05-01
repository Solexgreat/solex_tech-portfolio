import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import './About.scss';
import { urlFor, client } from '../../client';
import { MotionWrap, AppWrap } from '../../wrapper';
import { useToggle } from '../../context/ToggleProvider';

// const abouts = [
//   {title: 'Web Deveplopment', description: 'I am a skilled web developer with expertise in creating dynamic website using mordern technologies.', imgUrl: images.about01},
//   {title: 'Backend Development', description: 'I am a skilled web designer with expertise in creating dynamic website using mordern technologies.', imgUrl: images.about02},
//   {title: 'Web3 Developer', description: 'I am a skilled web3 developer with expertise in creating dynamic website using mordern technologies.', imgUrl: images.about03},
//   {title: 'Devops Engineer', description: 'I am a skilled web3 developer with expertise in creating dynamic website using mordern technologies.', imgUrl: images.about04},
// ]

const About = () => {
  const [abouts, setAboouts] = useState([]);
  const { isOn } = useToggle();

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAboouts(data))
  }, [])
  return (
    <>
      <h2 className={isOn ? 'head-text' : 'head-text dark'}>In Know That <span>Good Dev</span> <br/> means <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2  className={isOn ? 'bold-text' : 'bold-text dark'} style={{ marginTop: 20 }}> {about.title} </h2>
            <p  className='p-text' style={{ marginTop: 10 }}> {about.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about', "app__whitebg"
);