import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { AnimationOnScroll } from "react-animation-on-scroll";

const projects = [
  
  {
    title: "React Portfolio",
    description:
      "My First Big React Project where I made my own Portfolio with inforamtion like My Own Bio, My Tech Skillset, Tools that I use, My Featured Projects. Also used Node.js and MongoDb for Contact Me Section.",
    getImageSrc: () => require("../images/project2.webp"),
    ghLink: "https://github.com/student-uit/Portfolio.git",
  }
  
];

const ProjectsSection = () => {

  return (
    <FullScreenSection
      p={8}
      alignItems="center"
      spacing={8}
      id="projects-section"
    >

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" animateOnce={true}>
      <Heading as="h1">
        <span className="purple">Featured</span> Projects
      </Heading>
      </AnimationOnScroll>
      <Box
        className="projectBox"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            ghLink={project.ghLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
