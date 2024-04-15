import { Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <main>
      <Flex className="flex-container">
        <p>{t("HomePage.introduction")}</p>
      </Flex>
    </main>
  );
};

export default Home;
