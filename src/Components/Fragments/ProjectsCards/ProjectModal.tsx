import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  useDisclosure,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import { redirectToUrl } from "../../../Utils/redirectUrl";
import { useTranslation } from "react-i18next";
import { ProjectProps } from "../../../Types/global-types";

const ProjectModal = ({ project }: ProjectProps) => {
  const { t } = useTranslation("global");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bgColor="blue.500"
        _hover={{ bg: "blue.700", borderRadius: "5px" }}
        color="white.200"
        transition=".2s ease"
        borderRadius="2px"
        p={4}
        fontWeight={500}
      >
        {t("Projects.ModalBtn")}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="blue.500">
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" mb={2}>
              <Heading size="md" fontWeight={500}>
                {t("Projects.projectLanguage")}
              </Heading>
              <Image
                src={project.isInEnglish ? "/gb.svg" : "/br.svg"}
                height={8}
                ml={2}
              />
            </Flex>
            <Text>{project.description}</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => redirectToUrl(project.GitHubLink)}
              bgColor="black.400"
              color="white.200"
              w="140px"
              mr={1}
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;
