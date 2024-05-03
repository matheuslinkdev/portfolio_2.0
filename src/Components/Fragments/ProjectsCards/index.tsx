import Projects from "../../../Data/projects";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  ButtonGroup,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";
import { redirectToUrl } from "../../../Utils/redirectUrl";

const ProjectsCards = () => {
  // Calling Projects function to get the array of projects
  const projectsArray = Projects();

  return (
    <Center flexWrap="wrap" gap="25px" width="95%">
      {projectsArray.map((project, index) => (
        <Card
          key={index}
          maxW="sm"
          bgColor="none"
          h="30rem"
          border="3px solid var(--chakra-colors-blue-300)"
        >
          <CardBody>
            <Box
              width="100%"
              h="35%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              position="absolute"
              top={0}
              left={0}
            >
              <Image
                src={project.screenshotUrl}
                alt={project.title}
                loading="lazy"
                borderRadius="0"
                width="640px"
                height="300px"
                objectFit="contain"
                opacity={!project.isFinished ? "40%" : ""}
              />
            </Box>

            {!project.isFinished && (
              <Center position="absolute" top={20} w="85%">
                <Text>Work in progress</Text>
              </Center>
            )}
            <Stack mt="170">
              <Heading fontSize="1.4rem" fontWeight={400}>
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
            </Stack>
          </CardBody>
          <CardFooter justifyContent="center" position="absolute" bottom={0} left={0} right={0}>
            <ButtonGroup spacing="2" m="auto">
              <Button
                onClick={() => redirectToUrl(project.GitHubLink)}
                bgColor="black.400"
                color="white.200"
                w="140px"
                _hover={{ bgColor: "black.700" }}
              >
                {project.GitHubLink ? "GitHub" : "404"}
              </Button>
              <Button
                bgColor="blue.700"
                color="white.200"
                w="140px"
                _hover={{ bgColor: "blue.800" }}
                onClick={() => {
                  project.deployLink ? redirectToUrl(project.deployLink) : "";
                }}
              >
                {project.deployLink ? "Deploy" : "404"}
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Center>
  );
};

export default ProjectsCards;
