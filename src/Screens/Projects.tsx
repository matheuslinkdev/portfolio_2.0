import { Flex, Heading } from '@chakra-ui/react';
import ProjectsCards from '../Components/Fragments/ProjectsCards';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [t] = useTranslation("global");
  return (
    <main>
      <Flex className="flex-container" bg="none" flexDir="column" h="100%">
        <Heading mb={10} fontWeight={400} size="md">{t("Projects.ProjectsLabel")}</Heading>
        <ProjectsCards />
      </Flex>
    </main>
  );
}

export default Projects