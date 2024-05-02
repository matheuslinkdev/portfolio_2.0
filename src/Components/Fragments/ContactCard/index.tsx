import { Box, Center, Icon, Text } from "@chakra-ui/react";
import { contactArray } from "../../../Data/contact";
import { redirectToUrl } from "../../../Utils/redirectUrl";

const ContactCard = () => {
  return (
    <Box
      display="flex"
      flexDir={{ base: "row", md: "column" }}
      justifyContent="space-between"
      alignItems="center"
      textAlign="center"
      w={{ base: "95%", md: "auto" }}
      gap={{ base: "", md: "1rem" }}
    >
      {contactArray.map((contact, index) => (
        <Box key={index} title={contact.title} textAlign="center">
          <Center
            bgColor="blue.300"
            h="3rem"
            w="3rem"
            borderRadius="50%"
            margin="auto"
            cursor="pointer"
            _hover={{boxShadow: "0 0 10px var(--chakra-colors-blue-200)"}}
            onClick={() => redirectToUrl(contact.href)}
          >
            <Icon
              as={contact.icon}
              fontSize={30}
              style={{ color: "var(--chakra-colors-blue-950)" }}
            />
          </Center>
          <Text fontWeight={300} color="white.200">
            {contact.title}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default ContactCard;
