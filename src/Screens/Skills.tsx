import { Flex, Text } from "@chakra-ui/react";
import SkillCard from "./../Components/Fragments/SkillCard/index.tsx";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t] = useTranslation("global");
  return (
    <main>
      <Flex
        className="flex-container"
        borderRadius="none"
        bgColor="blue.800"
        w="100%"
        justifyContent="space-evenly"
        flexWrap="wrap"
        >
        <Text textAlign={{base: "center", md: "start"}} w="500px" maxW="95dvw" color="white.200">
            {t("Skills")}
        </Text>
        <SkillCard />
      </Flex>
    </main>
  );
};

export default Skills;
