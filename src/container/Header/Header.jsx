import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { useToggle } from '../../context/ToggleProvider';

const Header = () => {
  const { isOn } = useToggle();


  return (
    <section className={isOn ? 'app__hero app__hero--light' : 'app__hero app__hero--dark'}>
      <div className='app__hero-overlay'></div>
      <div className='app__hero-inner'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
        className='app__hero-content'
      >
        <h1 className='app__hero-title'>
          I build systems that <span>scale, perform</span>, and don&apos;t <span>break</span>.
        </h1>

        <p className='app__hero-subtitle'>
          software Engineer with years experience building Website, APIs, automation systems,
          and scalable architectures using Node.js, Laravel, and modern cloud tools.
        </p>

        <div className='app__hero-bullets'>
          <p>• Build Saas products</p>
          <p>• Scalable API design and microservices</p>
          <p>• Clean, maintainable architecture</p>
          <p>• Performance-focused systems</p>
        </div>

        <div className='app__hero-cta'>
          <a href='#work' className='app__hero-btn app__hero-btn--primary'>
            View My Work
          </a>
          <a href='#contact' className='app__hero-btn app__hero-btn--secondary'>
            Let&apos;s Work Together
          </a>
        </div>

        <p className='app__hero-trust'>Trusted by startups and growing teams.</p>
      </motion.div>

      <motion.div
        whileInView={{ x: [60, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className='app__hero-media'
      >
        <div className='app__hero-image-wrap'>
          <div className='app__hero-glow'></div>
          <div className='app__hero-image-card'>
            <img src={images.solextech_img2} alt='Solomon portrait' className='app__hero-image' />
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}

export default AppWrap(Header,'home');