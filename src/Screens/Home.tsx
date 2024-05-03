import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AboutMeModal from "../Components/Layout/AboutMeModal";
import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { redirectToUrl } from "../Utils/redirectUrl";
import { AnimatedComponentProps } from "../Types/global-types";

const AnimatedComponent = ({ children }: AnimatedComponentProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const imgProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(400px)",
  });

  return (
    <animated.div ref={ref} style={imgProps}>
      {children}
    </animated.div>
  );
};

const buttonLinks = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/matheus-link-21b3a4265/",
    backgroundColor: "blue.600",
    hoverBgColor: "blue.800",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    href: "https://github.com/matheuslinkdev?tab=repositories",
    backgroundColor: "black.400",
    hoverBgColor: "black.500",
    icon: FaGithub,
  },
];

const Home = () => {
  const [t] = useTranslation("global");

  const props = useSpring({
    from: { transform: "translateY(-10px)" },
    to: { transform: "translateY(10px)"},
    config: { duration: 3000 },
    loop: { reverse: true },
  });

    const btnProps = useSpring({
      from: { transform: "translateX(50px)" },
      to: { transform: "translateY(0px)" },
    });


  return (
    <main>
      <Flex
        className="flex-container home"
        alignItems="center"
        justifyContent={{ base: "center", md: "space-around" }}
        flexWrap="wrap-reverse"
        mt={{ base: "6dvh", md: "" }}
      >
        <Box
          px="10px"
          w={450}
          maxWidth="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          className="content-box-home"
        >
          <Text fontSize="3xl" fontWeight={600}>
            {t("HomePage.introduction")}
          </Text>
          <Text fontSize="2xl" color="blue.300" mt={2}>
            {t("HomePage.stack")}
          </Text>
          <Flex
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            m="15px auto"
          >
            {buttonLinks.map((target, index) => {
              return (
                <AnimatedComponent key={index}>
                  <animated.div style={btnProps}>
                    <Button
                      key={index}
                      w="140px"
                      mt={2}
                      mx={2}
                      bgColor={target.backgroundColor}
                      color="white.200"
                      _hover={{ bg: target.hoverBgColor }}
                      onClick={() => redirectToUrl(target.href)}
                      aria-label={`${target.title} button`}
                    >
                      <Icon as={target.icon} mr={2} /> {target.title}
                    </Button>
                  </animated.div>
                </AnimatedComponent>
              );
            })}
          </Flex>
        </Box>

        <Box
          px="50px"
          w={400}
          maxW="95dvw"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <AnimatedComponent>
            <animated.div style={props}>
              <Image
                borderRadius="full"
                w={220}
                maxW="50dvw"
                h="auto"
                bgGradient="linear(to-r, blue.200, blue.800)"
                src="https://avatars.githubusercontent.com/u/122500941?s=400&u=1616f74cd49d584d299ac2595cc841f1849a03f0&v=4"
                alt="Matheus Link"
              />
            </animated.div>
          </AnimatedComponent>
          <AboutMeModal />
        </Box>
      </Flex>
    </main>
  );
};

export default Home;
