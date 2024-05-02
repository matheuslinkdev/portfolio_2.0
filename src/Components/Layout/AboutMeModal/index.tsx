import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdEmojiPeople } from "react-icons/md";

const AboutMeModal = () => {
  const [t] = useTranslation("global");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollIntoView = (id: string) => {
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Button
        onClick={onOpen}
        mt={5}
        bg="blue.500"
        w={150}
        h="42px"
        color="white.300"
        fontWeight={500}
        fontSize="lg"
        _hover={{ bg: "blue.900", transform: "scale(1.07)"}}
      >
        {t("HomePage.modalBtn")} <Icon as={MdEmojiPeople} fontSize={20}/>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={430} maxW="95dvw" mt="10dvh" bgColor="black.600">
          <ModalCloseButton />
          <ModalBody>
            <Text mt={10} color="white.300">
              {t("HomePage.modalContent")}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} bg="red.800" _hover={{bg: "red.700"}}>
              {t("HomePage.modalClose")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                scrollIntoView("contactPage");
                onClose();
              }}
              bgColor="blue.700"
              color="white.300"
              _hover={{ bgColor: "blue.800" }}
            >
              {t("header.contact")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutMeModal;
