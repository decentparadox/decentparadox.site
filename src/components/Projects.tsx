import React from "react";
import "./Project.css";

import Project1Img from "public/about/img1.jpeg";
import Project2Img from "public/about/img2.jpeg";
import Project3Img from "public/about/img3.jpeg";
import Project4Img from "public/about/img4.jpeg";
import Project5Img from "public/about/img5.jpeg";

const Home = () => {
  return (
    <div className="Home relative">
      <div className="projects-nav">
        <div className="projects-nav-container">
          <div className="project-item">
            <a href="/Projects/Kalser">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src="../kalser.png" alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Kalser</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>TUI tool to rice your linux</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </a>
          </div>

          <div className="project-item">
            <a href="/Projects/evanix">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src="../evanix.png" alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Eva 01 nix</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>Nix os Flakes dotfiles</p>
                  <p>/2024</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </a>
          </div>

          <div className="project-item">
            <a href="/Projects/Orca">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src="../orca.png" alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Orca</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>Astro integration for Graphic Designers</p>
                  <p>/2024</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </a>
          </div>
          <div className="project-item">
            <a href="/Projects/bi0smeetups">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src="../bi0s.png" alt="" />
                  </div>
                  <div className="project-name">
                    <h2>bi0s Meetups</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>bi0s meetups website</p>
                  <p>/2024</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="about-container">
          <div className="about-col">
            <p>(about me)</p>
            <p>
              Hey, I'm Sasank Reddy, also known as "decentparadox." I'm currently a student pursuing
              a degree in Computer Science with a focus on Artificial Intelligence
              at Amrita School of Engineering, Bangalore. During the day, I work
              as a graphic and UI/UX designer, and I've got two years of experience
              under my belt. I'm also into tech stuff like reverse engineering,
              game hacking, and web development. On weekends, you'll find me
              diving into Capture The Flag (CTF) challenges.
            </p>
          </div>
          <div className="about-col">
            <div className="socials">
              <a href="mailto:rsasank69@gmail.com">email &#8599;</a>
              <a href="tg://resolve?domain=decentparadox">telegram &#8599;</a>
              <a href="https://www.linkedin.com/in/sasank-reddy-thirumuru/">linkedin &#8599;</a>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Home;
