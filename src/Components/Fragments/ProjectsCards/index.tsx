import Projects from "../../../Data/projects";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Center,
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
            <Image
              src={project.screenshotUrl}
              alt={project.title}
              borderRadius="0"
              border="5px solid var(--chakra-colors-black-800)"
              opacity={!project.isFinished ? "40%" : ""}
            />
            {!project.isFinished && (
              <Center position="absolute" top={20} w="90%">
                <Text>Work in progress</Text>
              </Center>
            )}
            <Stack mt="6" spacing="3">
              <Heading fontSize="1.4rem" fontWeight={400}>{project.title}</Heading>
              <Text>{project.description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter justifyContent="center">
            <ButtonGroup spacing="2">
              <Button
                onClick={() => redirectToUrl(project.GitHubLink)}
                bgColor="black.400"
                color="white.200"
                w="140px"
                _hover={{ bgColor: "black.700" }}
              >
                Repo
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
