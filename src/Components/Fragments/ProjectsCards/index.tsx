import { Box } from "@chakra-ui/react";

import Mobile from "./MobileProjects";
import WebProjects from "./WebProjects";

const ProjectsCards = () => {
  return (
    <>
      <WebProjects />
        <Box width="100%" h={10}></Box>
      <Mobile />
    </>
  );
};

export default ProjectsCards;
