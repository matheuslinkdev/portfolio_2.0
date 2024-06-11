import Projects from "../../../Data/projects";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";

const MobileProjects = () => {
  const projectsArray = Projects();
  return (
    <>
      <Heading
        size="lg"
        fontWeight={500}
        mb={2}
        alignSelf={{ base: "center", md: "start" }}
      >
        Mobile:
      </Heading>
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        w="100%"
        flexWrap="wrap"
        gap={2}
      >
        {projectsArray
          .filter((pjt) => pjt.isMobile)
          .map((pjt, index) => {
            return (
              <Card
                key={index}
                bgImage={`url(${pjt.screenshotUrl})`}
                h={300}
                w={180}
                bgSize="cover"
                bgPos="center"
                bgColor="#6d3c16"
                borderRadius="10px"
                overflow="hidden"
              >
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
                  {!pjt.isFinished && (
                    <Center position="absolute" top={2} w="100%">
                      <Text color="white.100">Work in progress</Text>
                    </Center>
                  )}
                  <Stack textAlign="center" w="100%" alignItems="center" mb={6}>
                    <Heading
                      fontSize="1.4rem"
                      fontWeight={400}
                      color="white.200"
                      mb={4}
                    >
                      {pjt.title}
                    </Heading>

                    <ProjectModal project={pjt} />
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
      </Flex>
    </>
  );
};

export default MobileProjects;
