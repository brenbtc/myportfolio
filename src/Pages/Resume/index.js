import { useState } from "react"

import './styles.css'

function Resume() {

    return (
      <main className="container">
        <div className="row">

          {/* Header */}

          <div className="col s12">
            <h2 className="header">Bren Cowell</h2>
            <h6 className="grey-text">Full-Stack & Blockchain Engineer</h6>
          </div>
          <section id="links" className="col s12">
            <ul id="lynx">
              
              <li><a href="https://www.linkedin.com/in/bren-cowell/" target='_blank' className="btn-flat">Linkedin</a></li>
              <li>Denver, CO</li>
              <li><a href="mailto:yanohb@yahoo.com?subject=Offer Inquiry" target='_blank' className="btn-flat">Mail</a></li>
              <li><a href="https://github.com/brenbtc" target='_blank' className="btn-flat">Github</a></li>
            </ul>
          </section>

          {/* Profile Summary */}

          <section id="summary">
            <h5 className="grey-text"><strong>Profile Summary</strong></h5>
            <p>
              A software engineer with project management experience,
              striving to work in blockchain development to create projects that address the proliferation of false information and corruption, 
              infusing a passion for decentralization to make a positive impact on the world.
            </p>
          </section>

          {/* Full-Stack Skills  */}

          <section id="skills">
            <h5 className="grey-text"><strong>Full-Stack Skills</strong></h5>
            <ul>
              <li>CSS</li>
              <li>DAOs</li>
              <li>Django</li>
              <li>ExpressJS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
              <li>PostgreSQL</li>
              <li>Python</li>
              <li>ReactJS</li>
              <li>Rust</li>
              <li>Solidity</li>
          </ul>
            <h5 className="grey-text"><strong>Soft Skills</strong></h5>
            <ul>
              <li>Adaptability</li>
              <li>Collaboration</li>
              <li>Communication</li>
              <li>Patience</li>
              <li>Problem-Solving</li>
              <li>Self-Awareness</li>
              <li>Time Management</li>
            </ul>
          </section>

          {/* Projects */}

          <section>
            <h5 className="grey-text"><strong>Projects</strong></h5>
            <div>
              <h6><strong>Characterboxd</strong></h6>
              <ul>
                <li>Utilized MERN stack.</li>
                <li>Implemented authentication with BCrypt.</li>
                <li>Built the application with full CRUD functionality.</li>
              </ul>
              <h6><strong>oChain</strong></h6>
              <ul>
                <li>Utilized MERN stack & Argon2.</li>
                <li>Data stored using MongoDB database through Mongoose.</li>
                <li>Full CRUD functionality using Javascript on Node.js and Express frameworks.</li>
              </ul>
            </div>
          </section>

          {/* Educaation */}
          <section>
            <h5 className="grey-text"><strong>Education</strong></h5>
            <div>
              <h6><strong>Blockchain Fundameentals</strong></h6>
              <p>Berkeley University of California, Remote.</p>
              <p>Gained an in-depth understanding of blockchain architecture, solutions, and cryptocurrencies while creating smart contracts and Dapps.</p>

              <h6><strong>Software Engineering Fellow</strong></h6>
              <p>General Assembly, Remote.</p>
              <p>420+ hours of expert led instruction in learning languages, frameworks, databases through backend and frontend development.</p>
            </div>
          </section>

          {/* Employment History  */}
        <section>
          <h5 className="grey-text"><strong>Employment History</strong></h5>
          <div>
            <h6><strong>Project Manager</strong></h6>
            <p>Adv Graphx - Aurora, CO.</p>
            <ul>
              <li>Determined and minimized risk in buying processes.</li>
              <li>Oversaw and analyzed outgoing projects.</li>
              <li>Created project plans to fit customer needs and delivered desired outcomes.</li>
            </ul>

          </div>
        </section>
        

        </div>
      </main>
    );
  }

export default Resume