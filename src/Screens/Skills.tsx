import { Flex, Heading } from '@chakra-ui/react';
import SkillCard from './../Components/Fragments/SkillCard/index.tsx';

const Skills = () => {
  return (
    <main>
      <Flex className="flex-container" borderRadius="none" bgColor="blue.800" flexDir="column" w="100%">
        <Heading mb={10} fontWeight={400} color="white.200" >Skills:</Heading>
        <SkillCard/>
      </Flex>
    </main>
  );
}

export default Skills