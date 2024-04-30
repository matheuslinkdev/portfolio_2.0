import React, { useState } from "react";
import { Box, Center, Heading, Icon, Text } from "@chakra-ui/react";
import skillsArray from "../../../Data/skills";

const SkillCard = () => {

  return (
    <Center flexWrap="wrap" gap="15px" w="95%">
      {skillsArray.map((skill, index) => (
        <Center key={index} title={skill.title} my="7dvh" mx="10dvw">
          <Icon
            as={skill.icon}
            style={{
              fontSize: "50px",
              color: "var(--chakra-colors-blue-950)",
              backgroundColor: "var(--chakra-colors-blue-400)",
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              padding: "7px",
            }}
            position="absolute"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 0 10px var(--chakra-colors-blue-600)",
            }}
          />
          <Text position="absolute" mt="14dvh" fontWeight={500} color="white.200">
            {skill.title}
          </Text>
        </Center>
      ))}
    </Center>
  );
};

export default SkillCard;
