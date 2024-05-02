import { Flex, Heading } from "@chakra-ui/react";
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
        flexDir="column"
        w="100%"
      >
        <Heading mb={20} fontWeight={400} color="white.200" size="md" px={5}>
          {t("Skills")}
        </Heading>
        <SkillCard />
      </Flex>
    </main>
  );
};

export default Skills;
