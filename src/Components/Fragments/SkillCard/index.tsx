import { Center, Icon, Text } from "@chakra-ui/react";
import { useTrail, animated } from "@react-spring/web";
import skillsArray from "../../../Data/skills";
import { useInView } from "react-intersection-observer";

const SkillCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Define a configuração da animação
  const config = { mass: 5, tension: 2000, friction: 200 };

  // Define as configurações iniciais de cada card
  const trail = useTrail(skillsArray.length, {
    config,
    opacity: inView ? 1 : 0,
    x: inView ? 0 : (index: number) => (index % 2 === 0 ? 300 : -300),
    from: { opacity: 0, x: -100 }, // Animação inicial para todos os cards
  });

  return (
    <Center ref={ref} flexWrap="wrap" gap="10px 5px" w="500px" maxW="100%">
      {trail.map((props, index) => (
        <animated.div
          key={index}
          style={{
            ...props,
            position: "relative",
          }}
        >
          <Center
            title={skillsArray[index].title}
            backgroundColor="blue.900"
            width="10rem"
            height="3.5rem"
            px={2}
            borderRadius="2px"
            justifyContent="space-between"
            _hover={{bgColor: "blue.950"}}
          >
            <Icon
              as={skillsArray[index].icon}
              style={{
                fontSize: "40px",
                color: "var(--chakra-colors-blue-300)",
              }}
              _hover={{
                transform: "scale(1.05)",
                filter: "drop-shadow(0 0 5px var(--chakra-colors-blue-700))",
              }}
            />
            <Text fontWeight={500} color="white.200">
              {skillsArray[index].title}
            </Text>
          </Center>
        </animated.div>
      ))}
    </Center>
  );
};

export default SkillCard;
