import { Flex } from '@chakra-ui/react';
import ContactForm from '../Components/Form/ContactForm';

const Contact = () => {
  return (
    <main>
      <Flex
        className="flex-container"
        borderRadius="20px"
        bgColor="blue.800"
        flexDir="column"
        w="95%"
      >
        <ContactForm />
      </Flex>
    </main>
  );
}

export default Contact