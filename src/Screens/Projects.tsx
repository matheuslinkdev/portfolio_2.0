import { Flex } from '@chakra-ui/react';
import React from 'react'
import ProjectsCards from '../Components/Fragments/ProjectsCards';

const Projects = () => {
  return (
    <main>
      <Flex className="flex-container">
        <p>Projects</p>
        <ProjectsCards/>
      </Flex>
    </main>
  );
}

export default Projects