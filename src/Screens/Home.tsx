import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <main>
      <Flex className="flex-container" justifyContent="space-between" flexWrap="wrap-reverse">
        <Box px="50px">
          <Text fontSize="xl">{t("HomePage.introduction")}</Text>
          <Text fontSize="xl">{t("HomePage.stack")}</Text>
          <button>Linkedin</button>
          <button>Github</button>
        </Box>
        <Spacer/>
        <Box px="50px">
          <Image
            borderRadius="full"
            boxSize="200px"
            bgGradient="linear(to-r, blue.200, blue.800)"
            src="https://avatars.githubusercontent.com/u/122500941?s=400&u=1616f74cd49d584d299ac2595cc841f1849a03f0&v=4"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </main>
  );
};

export default Home;
