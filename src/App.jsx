import React from 'react'
import Footer from './components/Footer'
import Button from './components/Button'
import SmoothScrollbar from './components/SmoothScroll'

const App = () => {
  return (
    <SmoothScrollbar>

      {/* Navbar */}
      <header header id='Nav' className='px-4 top-0 pt-6 flex items-center justify-between z-10 absolute text-white w-[100vw] py-2' >
        <div className="logo">
          <h2 className='font-[Basement] text-3xl font-bold'>ali.</h2>
        </div>
        <div className="navButtons flex items-center gap-2">
          <Button btnVal="Resume" />
          <Button btnVal="About" />
          <Button id="#" btnVal="Work" />
        </div>
      </header >

      {/* Hero */}
      {/* <img src="/BgOverlay.png" alt="overlay" className='fixed w-[100%] h-[100vh] left-[0%]' /> */}
      <div className="m-auto px-4 bg-black h-[100vh] w-[100vw] flex  flex-col justify-center">
        <div className="left text-center text-white">
          <h1 data-cursor-text="I'm Ali" className='text-nowrap leading-[.9] font-[Basement] mix-blend-difference inline-block text-center text-[12vw]'><span id='specialtext' >WEB</span> <br /> DEVELOPER</h1>
          <p className='text-2xl leading-normal max-[1000px]:text-[15px] max-[1000px]:m-auto max-[1000px]:w-[70%] max-[850px]:w-[90%] text-gray-400 w-[60%] m-auto'>Aspiring web developer passionate about mastering the MERN stack. Continuously building innovative projects and enhancing my skills in web technologies.</p>
        </div>
        {/* <div className='text-[1.5vw] m-auto w-[100%] absolute bottom-0 items-center justify-center flex py-4 text-white'>
          <Button href="#about" id="#about" icon="hover:text-black bx bx-right-arrow-alt rotate-45 text-[2.2vw]" btnVal="Know more about me." />
        </div> */}
      </div>

      <hr className='border-gray-800' />
      {/* About Section */}

      <div className='h-[100vh] flex items-center justify-between max-[1000px]:gap-10 max-[1000px]:justify-center max-[1000px]:flex-col max-[1000px]:text-center max-[1000px]:py-4 px-4 bg-black text-white' id='about'>
        <div className="aboutContent w-[50%] max-[1000px]:w-[100%]" data-cursor-text="about me">
          <h2 className='text-5xl leading-snug max-[1500px]:text-4xl max-[1000px]:text-2xl'><span className='font-[Basement]'>Hey, this is Ali!</span> An enthusiastic developer transitioning from seo to web development, currently learing mern stack and building innovative web applications.</h2>
          <p className='text-2xl leading-normal max-[1000px]:text-[15px] max-[1000px]:m-auto max-[1000px]:w-[70%] max-[850px]:w-[90%] text-gray-400'>I'm a junior developer with a growing passion for web technologies, currently learning the MERN stack, React.js, and other front-end technologies. I continuously enhance my skills by building projects and taking courses to stay ahead in the field.</p>
        </div>
        <div className="max-[1000px]:w-[50%] aboutImage pointer-events-none select-none" data-cursor-text="about me">
          <img src="/About.png" alt="About Me" />
        </div>
      </div>

      <hr className='border-gray-800' />
      {/* Work Section */}

      <div className='max-[1000px]:gap-10 max-[1000px]:justify-center max-[1000px]:flex-col max-[1000px]:text-center max-[1000px]:py-4 h-[100vh] flex items-center justify-between px-4 bg-black text-white' id='#about'>
        <div className="aboutImage pointer-events-none max-[1000px]:w-[50%] select-none" data-cursor-text="my work">
          <img src="/Work.png" alt="My Projects" />
        </div>
        <div className="aboutContent w-[50%] max-[1000px]:w-[100%]  " data-cursor-text="about me">
          <h2 className='text-5xl leading-snug max-[1500px]:text-4xl max-[1000px]:text-2xl'><span className='font-[Basement]'>Couple of my projects!</span> Explore my web development projects with a focus on front-end development, react js and front-end technologies.</h2>
          <p className='text-2xl leading-normal max-[1000px]:text-[15px] max-[1000px]:m-auto max-[1000px]:w-[70%] max-[850px]:w-[90%] text-gray-400'>Explore my projects that highlight my expertise in the web development particularly in React js. My project reflects my dedication to creating responsive, functional web applications and my commitment to continuous learning.</p>
        </div>
      </div>
      <hr className='border-gray-800' />
      <Footer />
    </SmoothScrollbar >
  )
}

export default App