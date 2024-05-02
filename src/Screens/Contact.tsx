import { Flex, Text } from '@chakra-ui/react';
import ContactForm from '../Components/Form/ContactForm';
import ContactCard from '../Components/Fragments/ContactCard';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const [t] = useTranslation("global")

  return (
    <main>
      <Text w="600px" maxW="95dvw" m="auto" mt={10} fontSize="1.1rem">{t("Contact")}</Text>
      <Flex
        className="flex-container"
        borderRadius="20px"
        bgColor="blue.800"
        flexDir={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-evenly" }}
        w="95%"
      >
        <ContactCard />
        <ContactForm />
      </Flex>
    </main>
  );
}

export default Contact