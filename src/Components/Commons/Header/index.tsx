import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DarkMode from "../../Theme/DarkMode";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Spacer,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrollY, setHeaderScrollY] = useState(0); // Initialize scroll position to 0

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  const [t, i18n] = useTranslation("global");

  const links = [
    { id: "homePage", label: t("header.home") },
    { id: "skillsPage", label: t("header.skills") },
    { id: "projectsPage", label: t("header.projects") },
    { id: "contactPage", label: t("header.contact") },
  ];

  return (
    <Center
      padding="5px 10px"
      className="header"
      w="100dvw"
      h="8dvh"
      position="fixed"
      zIndex="30"
      bg={headerScrollY > 80 ? "blue.transparent.300" : "transparent"}
      backdropFilter={headerScrollY > 80 ? "blur(5px)" : "none"}
    >
      {/* Hamburger menu for small screens */}
      <Box display={{ base: "block", md: "none" }}>
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          variant="ghost"
          size="lg"
          aria-label="menu-icon"
        >
          {menuOpen ? (
            <Icon
              as={IoMdClose}
              color="orange.500"
              position="absolute"
              w={35}
              h={35}
              zIndex={999}
            />
          ) : (
            <Icon
              as={IoMdMenu}
              color="orange.500"
              position="absolute"
              w={35}
              h={35}
              zIndex={999}
            />
          )}
        </Button>
      </Box>

      {/* Overlay and navigation links for small screens when menu is open */}
      <Center
        style={{
          visibility: menuOpen ? "visible" : "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: "25",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="menu-overlay"
        onClick={() => setMenuOpen(false)}
      >
        <List alignItems="center" textAlign="center">
          {links.map((link) => (
            <ListItem
              key={link.id}
              m="25px 0"
              onClick={() => scrollIntoView(link.id)}
              style={{ cursor: "pointer", fontWeight: 600, fontSize: "1.2rem" }}
              color="#fff"
              className="header-link"
            >
              {link.label}
            </ListItem>
          ))}
        </List>
      </Center>

      {/* Navigation links for larger screens */}
      <Center style={{ display: "flex" }}>
        <List
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          _hover={{ cursor: "pointer" }}
          h="100%"
        >
          {links.map((link) => (
            <ListItem
              key={link.id}
              h="100%"
              borderRadius={5}
              w={120}
              display="flex"
              justifyContent="center"
              alignItems="center"
              m={{ base: "5px 0", md: "0 2px" }}
              _hover={{ cursor: "pointer" }}
              fontWeight={600}
              onClick={() => scrollIntoView(link.id)}
              className="header-link"
            >
              {link.label}
            </ListItem>
          ))}
        </List>
      </Center>

      {/* Language buttons and DarkMode component */}
      <Spacer />
      <ButtonGroup>
        <Button
          onClick={() => handleChangeLanguage("pt")}
          className="lang-btn"
          variant="ghost"
          bgImage="url(br.svg)"
          h="30px"
          w="auto"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          _hover={{
            bgColor: "initial",
            boxShadow: "0 2px 6px var(--chakra-colors-blue-400)",
            transform: "scale(1.02)",
          }}
          aria-label="Brazilian Flag"
        />

        <Button
          onClick={() => handleChangeLanguage("en")}
          className="lang-btn"
          variant="ghost"
          bgImage="url(gb.svg)"
          h="30px"
          w="auto"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          _hover={{
            bgColor: "initial",
            boxShadow: "0 2px 6px var(--chakra-colors-blue-400)",
            transform: "scale(1.02)",
          }}
          aria-label="Great Britain Flag"
        />

        <Spacer />
        <DarkMode />
      </ButtonGroup>
    </Center>
  );
};

export default Header;
