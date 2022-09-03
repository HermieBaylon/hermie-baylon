import React, { useState } from "react";
import "./Projects.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WestMonroe, University } from "../../Data/ProjectData";
import Modal from "../../components/Modal.jsx";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [summary, setSummary] = useState("");

  const WestMonroeProjects = WestMonroe.map((project) => {
    return (
      <img
        className="testingImage"
        src={`../images/${project.source}`}
        onClick={() => {
          setIsOpen(true);
          setSummary(project.summary);
        }}
      />
    );
  });

  const UniversityProjects = University.map((project) => {
    return (
      <img
        className="testingImage"
        src={`../images/${project.source}`}
        onClick={() => {
          setIsOpen(true);
          setSummary(project.summary);
        }}
      />
    );
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
    <>
      <p className="projects-heading">Projects</p>

      <p className="label">West Monroe Projects</p>
      <div className="internal-carousel-container">
        <Carousel responsive={responsive}>{WestMonroeProjects}</Carousel>
      </div>
      <p className="label">University Projects</p>
      <div className="university-carousel-container">
        <Carousel responsive={responsive}>{UniversityProjects}</Carousel>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {isOpen && <Modal setIsOpen={setIsOpen} summary={summary} />}
    </>
  );
}
