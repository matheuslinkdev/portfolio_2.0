import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AboutMeModal from "../Components/Layout/AboutMeModal";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <main>
      <Flex
        className="flex-container home"
        justifyContent="space-evenly"
        flexWrap="wrap-reverse"
      >
        <Box
          px="50px"
          w={400}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl">{t("HomePage.introduction")}</Text>
          <Text fontSize="xl">{t("HomePage.stack")}</Text>
          <button>Linkedin</button>
          <button>Github</button>
        </Box>
  
        <Box
          px="50px"
          w={400}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            borderRadius="full"
            w={250}
            maxW="45dvw"
            h="auto"
            bgGradient="linear(to-r, blue.200, blue.800)"
            src="https://avatars.githubusercontent.com/u/122500941?s=400&u=1616f74cd49d584d299ac2595cc841f1849a03f0&v=4"
            alt="Dan Abramov"
          />
          <AboutMeModal />
        </Box>
      </Flex>
    </main>
  );
};

export default Home;
