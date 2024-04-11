import React, { useRef } from 'react';

import ReactLogo from '../assets/img/logo512.png'
import JavaLogo from'../assets/img/java-logo.png'
import JavaScriptLogo from '../assets/img/JavaScript-Logo-2048x1280.png'
import PythonLogo from '../assets/img/python.png'
import HTMLLogo from '../assets/img/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png'
import CSSLogo from '../assets/img/css-3-logo-svgrepo-com.svg'
import SASSLogo from '../assets/img/SassLogo.png'
import RLogo from '../assets/img/R_logo.png'
import CSharpLogo from '../assets/img/c-sharp-800x800.png';
import SpringbootLogo from '../assets/img/spring-boot-logo_full.png'
import UnityLogo from '../assets/img/unityengine.png'

export const Projects = () => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
    
    return (
      <section className='project' id='projects'>
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
          <div className="project-container">
              <div className="project-text">
                <h1>Projects</h1>
                <p>An assortment of projects I have created throughtout my years of developing. Your can see more projects on my GitHub (Github API implementation coming soon :)</p>
              </div>
              <div className="project-boxes">
                <div className="project-box">
                  <h2>Cinematd</h2>
                  <p>A social and logging platform for movie-goers and cinephiles🎥</p>
                  <div className='languages'>
                    <img className='language-icons' src={JavaScriptLogo}></img>
                    <img className='language-icons' src={ReactLogo}></img>
                    <img className='language-icons' src={HTMLLogo}></img>
                    <img className='language-icons' src={CSSLogo}></img>
                    <img className='language-icons' src={SASSLogo}></img>
                  </div>
                  <div className='buttons'>
                    <a href='https://github.com/amerissa007/Cinematd'><button className='github-button'>GitHub</button></a>
                  </div>
                </div>
                <div className="project-box">
                  <h2>MTA Route Planning</h2>
                  <p>A Java program that dynamically finds you the optimal route within the MTA Subway System🚂</p>
                  <div className='languages'>
                    <img className='language-icons' src={JavaLogo}></img>
                  </div>
                  <div className='buttons'>
                    <a href='https://github.com/amerissa007/MTA-Route-Planning-Project'><button className='github-button'>GitHub</button></a>
                  </div>
                </div>
                <div className="project-box">
                  <h2>Brooklyn Food Drive</h2>
                  <p>A website I created for a fictional food drive in Brooklyn, New York🤝</p>
                  <div className='languages'>
                    <img className='language-icons' src={HTMLLogo}></img>
                    <img className='language-icons' src={CSSLogo}></img>
                  </div>
                  <div className='buttons'>
                    <a href='https://github.com/amerissa007/Food-Drive-Project'><button className='github-button'>GitHub</button></a>
                  </div>
                </div>
                <div className="project-box">
                  <h2>Video Game Development</h2>
                  <p>An assortment of video games I created ranging from 2D to 3D games🎮</p>
                  <div className='languages'>
                    <img className='language-icons' src={CSharpLogo}></img>
                    <img className='language-icons' src={UnityLogo}></img>
                  </div>
                  <div className='buttons'>
                    <a href='https://issaamer.itch.io/'><button className='github-button'>itch.io</button></a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
}
export default Projects;