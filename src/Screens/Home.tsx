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
    transform: inView ? "translateX(0)" : "translateX(100px)",
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
    backgroundColor: "blue.700",
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
    to: { transform: "translateY(10px)" },
    config: { duration: 3000 },
    loop: { reverse: true },
  });

  const btnProps = useSpring({
    from: { transform: "translateX(10px)" },
    to: { transform: "translateY(0px)" },
  });

  return (
    <main>
      <Flex
        className="flex-container home"
        alignItems="center"
        justifyContent={{ base: "center", md: "space-evenly" }}
        flexWrap="wrap-reverse"
        mt={{ base: "7dvh", md: "5dvh" }}
        mb={0}
      >
        <Box
          px="10px"
          w={600}
          maxWidth="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="start"
          alignItems="center"
          className="content-box-home"
        >
          <Text fontSize="3xl" fontWeight={600}>
            {t("HomePage.introduction")}
          </Text>
          <Text fontSize="lg" fontWeight={500} color="blue.400" mt={2}>
            {t("HomePage.description")}
          </Text>
          <Flex
            width="100%"
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems="center"
            m="15px auto"
          >
            <AnimatedComponent>
              <animated.div style={btnProps}>
                <Flex alignItems="start" justifyContent="start">
                  <Button
                    w="140px"
                    mt={2}
                    bgColor={buttonLinks[0].backgroundColor}
                    color="white.100"
                    borderRadius="2px"
                    _hover={{ bg: buttonLinks[0].hoverBgColor, borderRadius: "5px" }}
                    transition=".3s ease"
                    onClick={() => redirectToUrl(buttonLinks[0].href)}
                    aria-label={`${buttonLinks[0].title} button`}
                  >
                    <Icon as={buttonLinks[0].icon} mr={2} fontSize={22} />{" "}
                    {buttonLinks[0].title}
                  </Button>
                  <Button
                    w="140px"
                    mt={2}
                    bgColor={buttonLinks[1].backgroundColor}
                    color="white.100"
                    borderRadius="2px"
                    _hover={{ bg: buttonLinks[1].hoverBgColor, borderRadius: "5px" }}
                    transition=".3s ease"
                    onClick={() => redirectToUrl(buttonLinks[1].href)}
                    aria-label={`${buttonLinks[1].title} button`}
                    ml={2}
                  >
                    <Icon as={buttonLinks[1].icon} mr={2} fontSize={22} />{" "}
                    {buttonLinks[1].title}
                  </Button>
                </Flex>
              </animated.div>
            </AnimatedComponent>
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
                width="200px"
                height="200px"
                maxW="65dvw"
                maxH="auto"
                bgGradient="linear(to-r, blue.200, blue.800)"
                src="https://avatars.githubusercontent.com/u/122500941?s=400&u=1616f74cd49d584d299ac2595cc841f1849a03f0&v=4"
                alt="Matheus Link"
                loading="lazy"
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
