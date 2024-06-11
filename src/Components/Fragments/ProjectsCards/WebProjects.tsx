import Projects from "../../../Data/projects";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Center,
  Box,
  Flex,
} from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";

const WebProjects = () => {
  // Calling Projects function to get the array of projects
  const projectsArray = Projects();

  return (
    <>
      <Heading
        size="lg"
        fontWeight={500}
        mb={2}
        alignSelf={{ base: "center", md: "start" }}
      >
        Web:
      </Heading>
      <Flex
        justifyContent="start"
        margin="auto"
        alignItems="center"
        flexWrap="wrap"
        gap="10px 20px"
      >
        {projectsArray
          .filter((pjt) => !pjt.isMobile)
          .map((project, index) => (
            <Card
              key={index}
              maxW="sm"
              width="100%"
              position="relative"
              overflow="hidden"
              borderRadius="15px"
            >
              <Box
                as="img"
                src={project.screenshotUrl}
                alt={project.title}
                w="auto"
                h="auto"
                maxH="400px"
              />
              <CardBody
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                position="absolute"
                bottom={0}
                w="100%"
                h="100%"
                p={4}
                bg="black.transparent.200"
                _hover={{ bg: "black.transparent.300" }}
              >
                {!project.isFinished && (
                  <Center position="absolute" top={2} w="100%">
                    <Text>Work in progress</Text>
                  </Center>
                )}
                <Stack textAlign="center" w="100%" alignItems="center">
                  <Heading
                    fontSize="1.4rem"
                    fontWeight={400}
                    color="white.200"
                    mb={4}
                  >
                    {project.title}
                  </Heading>

                  <ProjectModal project={project} />
                </Stack>
              </CardBody>
            </Card>
          ))}
      </Flex>
    </>
  );
};

export default WebProjects;
