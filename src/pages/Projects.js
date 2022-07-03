import React from 'react';
import './Projects.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProjectData from '../Data/ProjectData';

export default function Projects() {

    const ProjectDataImages = ProjectData.map(project => {
        return <img src={`../images/${project}`} />
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <h1 className='heading'>Projects</h1>
            {/* <h4 className='label'>All Projects</h4>
            <div className='all-carousel-container'>
                <Carousel responsive={responsive}>
                    <img className='testingImage' src='../images/pep8Simulator.jpg'></img>
                    <img className='testingImage' src='../images/harmony.jpg'></img>
                    <img className='testingImage' src='../images/backbase.jpg'></img>
                    <img className='testingImage' src='../images/hailPizza.jpg'></img>
                    <img className='testingImage' src='../images/asteroidFighter.jpg'></img>
                    <img className='testingImage' src='../images/pricingTool.jpg'></img>
                    <img className='testingImage' src='../images/dashboard.jpg'></img>
                </Carousel>
            </div> */}

            <h4 className='label'>Client Projects</h4>
            <div className='client-carousel-container'>
                <Carousel responsive={responsive}>
                    <img className='testingImage' src='../images/beaconMobility.jpg'></img>
                </Carousel>
            </div>
            <h4 className='label'>Internal Projects</h4>
            <div className='internal-carousel-container'>
                <Carousel responsive={responsive}>
                    <img className='testingImage' src='../images/backbase.jpg'></img>
                    <img className='testingImage' src='../images/pricingTool.jpg'></img>
                    <img className='testingImage' src='../images/dashboard.jpg'></img>
                </Carousel>
            </div>
            <h4 className='label'>University Projects</h4>
            <div className='university-carousel-container'>
                <Carousel responsive={responsive}>
                    <img className='testingImage' src='../images/pep8Simulator.jpg'></img>
                    <img className='testingImage' src='../images/harmony.jpg'></img>
                    <img className='testingImage' src='../images/hailPizza.jpg'></img>
                    <img className='testingImage' src='../images/asteroidFighter.jpg'></img>
                </Carousel>
            </div>
            {/* <h4 className='label'>Side Projects</h4>
            <h4 className='label'>Leetcode Application Projects</h4> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}