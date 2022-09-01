import React from "react";
import "./Home.css";

import Card from "../../components/Card";
import Tag from "../../components/Tag";
import DataIndustries from "../../Data/DataIndustries";

import { MdWorkOutline } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DataSkills from "../../Data/DataSkillAll";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const industriesServed = DataIndustries.map((skill) => {
    return <Card key={skill.id} skill={skill} />;
  });

  const skills = DataSkills.map((skill) => {
    return <Card key={skill.id} skill={skill} />;
  });

  const skills2 = DataSkills.map((skill) => {
    return <Tag key={skill.id} skill={skill} />;
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="home">
        <div className="home--summary">
          <img
            className="home--summary-image"
            src="../images/hermieProfile2.jpg"
          ></img>
          <div className="home--summary-description">
            <h3 className="home--summary-description-header">
              My name is Hermie Baylon.
            </h3>
            <p className="home--summary-description-para">
              I graduated from the University of Washington-Tacoma with a
              bachelor's degree in computer science. I am currently a Software
              Engineer Consultant at West Monroe, where I have worked with both
              front-end and back-end development. As a consultant, I collaborate
              with clients to understand their business needs and develop
              software application solutions.
            </p>
          </div>
        </div>
        <div className="home--facts">
          <div className="home--fun-facts">
            <div className="home--fun-fact">
              <MdWorkOutline className="icon"></MdWorkOutline>
              <p className="home--fun-fact-number">1</p>
              <p className="home--fun-fact-label">Years of</p>
              <p className="home--fun-fact-label">Experience</p>
            </div>

            <div className="home--fun-fact">
              <GrMoney className="icon"></GrMoney>
              <p className="home--fun-fact-number">$950k</p>
              <p className="home--fun-fact-label">Engagement</p>
              <p className="home--fun-fact-label">Service</p>
            </div>

            <div className="home--fun-fact">
              <AiOutlineFundProjectionScreen className="icon"></AiOutlineFundProjectionScreen>
              <p className="home--fun-fact-number">10+</p>
              <p className="home--fun-fact-label">Projects</p>
              <p className="home--fun-fact-label">Completed</p>
            </div>

            <div className="home--fun-fact">
              <BsEmojiSmile className="icon"></BsEmojiSmile>
              <p className="home--fun-fact-number">6</p>
              <p className="home--fun-fact-label">Satisfied</p>
              <p className="home--fun-fact-label">Clients</p>
            </div>
          </div>
        </div>
        <div className="home--industries-container">
          <h1 className="home--industries-heading">Industries Served</h1>
          <Carousel className="home--industries" responsive={responsive}>
            {industriesServed}
          </Carousel>
        </div>
        <div className="home--skills">
          <div className="home--skills-container">
            <h1 className="home--skills-heading">Technical Skills</h1>
            <Carousel responsive={responsive}>{skills}</Carousel>
          </div>
        </div>
        <div className="home--contacts">
          <h1 className="home--contacts-header">Contact me</h1>
          <div className="home--contacts-card">
            <h4 className="home--contacts-name">Hermie Baylon</h4>
            <h4>Software Engineer Consultant</h4>
            <img
              className="home--contacts-logo"
              src="../images/BlueAndYellow.png"
            ></img>
            <br></br>
            <br></br>
            <h4>253-844-8998</h4>
            <h4>hermib100@gmail.com</h4>
          </div>
          <div className="home--contacts-container">
            <a
              className="home--contacts-linkedin"
              href="https://www.linkedin.com/in/hermie-baylon/"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a className="home--contacts-email" href="/contact">
              <HiOutlineMail></HiOutlineMail>
            </a>
            <a
              className="home--contacts-facebook"
              href="https://www.facebook.com/profile.php?id=100008346004828"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </a>
            <a
              className="home--contacts-instagram"
              href="https://www.instagram.com/hermiebaylon/?hl=en"
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              className="home--contacts-github"
              href="https://github.com/HermieBaylon"
            >
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
