import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


const AboutMeModal = () => {
      const [t] = useTranslation("global");
    const { isOpen, onOpen, onClose } = useDisclosure();
      const scrollIntoView = (id: string) => {
        document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
      };
  return (
    <>
      <Button onClick={onOpen} mt={5} >
        {t("HomePage.modalBtn")}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={450} maxW="95dvw" mt="10dvh" bgColor="black.600">
          <ModalCloseButton />
          <ModalBody>
            <Text mt={10} color="white.300">{t("HomePage.modalContent")}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} color="blue.800">
              {t("HomePage.modalClose")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                scrollIntoView("contactPage");
                onClose();
              }}
              bgColor="orange.400"
              _hover={{bgColor: "orange.700"}}
            >
              {t("header.contact")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AboutMeModal