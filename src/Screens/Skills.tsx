import { Flex, Text } from "@chakra-ui/react";
import SkillCard from "./../Components/Fragments/SkillCard/index.tsx";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t] = useTranslation("global");
  return (
    <main>
      <Flex
        className="flex-container-skills"
        borderRadius="none"
        w="100%"
        justifyContent="space-evenly"
        flexWrap="wrap"
        >
        <Text textAlign={{base: "center", md: "start"}} w="500px" maxW="95dvw" color="white.200" fontSize={18} fontWeight={500}>
            {t("Skills")}
        </Text>
        <SkillCard />
      </Flex>
    </main>
  );
};

export default Skills;
