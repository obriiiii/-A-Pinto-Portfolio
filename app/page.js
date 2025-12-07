'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  // Smooth scroll effect
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const target = document.querySelector(targetId)
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h2>Hi, I'm <span className="typewriter">Aubrey Kate</span></h2>
            <h3>FULL STACK DEVELOPER & UI/UX DESIGNER</h3>
            <p>
              I'm a passionate student who enjoys designing and creating digital projects.
              I love exploring how technology can make life easier. This portfolio showcases
              my works and learning journey in Computer Science.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View my work</a>
              <a href="#contact" className="btn-outline">Get in touch</a>
            </div>
          </div>
          <div className="hero-img">
            <Image 
              src="/images/pinto1.png" 
              alt="Aubrey Kate Pinto"
              width={240}
              height={240}
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>ABOUT ME</h2>
        <div className="about-container">
          <div className="about-text-box">
            <p>
              I'm <strong>Aubrey Kate Pinto</strong>, a Computer Science student at Partido State University. 
              I enjoy learning about technology, design, and how they can solve real-world problems. 
              I may still be developing my programming skills,
              but I'm motivated to improve through hands-on projects and creative works.
            </p>
          </div>

          <div className="about-skill-container">
            <div className="about-skill-box">
              <div className="about-skill-header">
                <div className="circle"></div>
                <h4>UI/UX Design</h4>
              </div>
              <div className="bar"><div className="progress uiux"></div></div>
              <span>80%</span>
            </div>

            <div className="about-skill-box">
              <div className="about-skill-header">
                <div className="circle"></div>
                <h4>Backend Development</h4>
              </div>
              <div className="bar"><div className="progress backend"></div></div>
              <span>45%</span>
            </div>

            <div className="about-skill-box">
              <div className="about-skill-header">
                <div className="circle"></div>
                <h4>Frontend Development</h4>
              </div>
              <div className="bar"><div className="progress frontend"></div></div>
              <span>75%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">SKILLS</h2>
          <p className="section-desc">
            I work with a wide range of technologies and tools to bring ideas to life. 
            Here's an overview of my technical skills and experience.
          </p>

          <div className="skills-grid">
            <div className="skill-box">
              <h3><span className="dot"></span> Frontend</h3>
              <div className="tags">
                <span>TypeScript</span>
                <span>Next.js</span>
                <span>Tailwind</span>
                <span>HTML</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Webpack</span>
                <span>React</span>
              </div>
            </div>

            <div className="skill-box">
              <h3><span className="dot"></span> Backend</h3>
              <div className="tags">
                <span>Node.js</span>
                <span>Express</span>
                <span>Python</span>
                <span>Django</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
                <span>REST APIs</span>
                <span>GraphQL</span>
              </div>
            </div>

            <div className="skill-box">
              <h3><span className="dot"></span> Tools & Others</h3>
              <div className="tags">
                <span>Git</span>
                <span>Docker</span>
                <span>AWS</span>
                <span>Agile</span>
                <span>Firebase</span>
                <span>Cypress</span>
                <span>Adobe XD</span>
                <span>Figma</span>
                <span>Jest</span>
              </div>
            </div>
          </div>

          <div className="stats">
            <div><strong>20+</strong><p>Projects Completed</p></div>
            <div><strong>5+</strong><p>Years Experience</p></div>
            <div><strong>20+</strong><p>Happy Clients</p></div>
            <div><strong>100%</strong><p>Client Satisfaction</p></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>PROJECTS</h2>
        <p>
          Here are some of my recent projects that showcase my skills and experience in
          building modern web and mobile applications.
        </p>

        <div className="project-container">
          <div className="project-card">
            <div className="project-image">
              <Image 
                src="/images/E-Library.png" 
                alt="E-Library System"
                width={320}
                height={200}
              />
            </div>
            <div className="project-content">
              <h3>E-LIBRARY SYSTEM</h3>
              <p>
                A digital system designed to help students and faculty manage and access thesis abstracts efficiently.
                It provides organized storage, easy searching, and retrieval of abstracts, promoting a paperless and modern academic process.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <Image 
                src="/images/travel_website.png" 
                alt="Cam Sur Website"
                width={320}
                height={200}
              />
            </div>
            <div className="project-content">
              <h3>CAM SUR WEBSITE</h3>
              <p>
                Languages Used: HTML and CSS. A website that highlights the beautiful destinations of Camarines Sur,
                including beaches, mountains, and local attractions. It aims to promote tourism by providing information,
                photos, and travel tips for visitors exploring the province.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <Image 
                src="/images/online shop.png" 
                alt="Online Shopping Prototype"
                width={320}
                height={200}
              />
            </div>
            <div className="project-content">
              <h3>ONLINE SHOPPING PROTOTYPE</h3>
              <p>
                A prototype mobile app created in Figma for an online dress shop. It allows users to browse, view, and select
                dresses with a clean and minimalist interface. This project focuses on showcasing simple navigation and stylish
                product presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="gradient-text">LET'S CONNECT</h2>
        <p>
          I'm always open to learning, collaborating, or getting feedback on my projects.<br />
          Feel free to reach out if you'd like to talk about tech, design, or school projects.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <div className="icon"><i className="fa-solid fa-phone"></i></div>
              <div>
                <h3>Phone</h3>
                <p>+6391 2314 5678</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
              <div>
                <h3>Location</h3>
                <p>Tigaon, Camarines Sur</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon"><i className="fa-solid fa-envelope"></i></div>
              <div>
                <h3>Email</h3>
                <p>hello@aubreygmail.com</p>
              </div>
            </div>

            <div className="socials">
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            <form action="#" method="post">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}