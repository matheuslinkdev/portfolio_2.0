import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import DarkMode from "../../Theme/DarkMode";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Center,
  Spacer,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrollY, setHeaderScrollY] = useState(80)

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
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const [t, i18n] = useTranslation("global");

  const links = [
    { id: "homePage", label: t("header.home") },
    { id: "skillsPage", label: t("header.skills") },
    { id: "projectsPage", label: t("header.projects") },
    { id: "contactPage", label: t("header.contact") },
  ];

  return (
    <Flex
      padding="5px 10px"
      className="header"
      w="100%"
      position="fixed"
      zIndex="30"
      bg={scrollY > 80 ? "blue.transparent.200" : "transparent"}
      backdropFilter={scrollY > 80 ? "blur(5px)" : "none"}
    >
      {/* Hamburger menu for small screens */}
      <Box display={{ base: "block", md: "none" }}>
        <Button
          onClick={() => setMenuOpen(!menuOpen)}
          variant="ghost"
          size="lg"
        >
          {menuOpen ? (
            <Icon
              as={IoMdClose}
              color="orange.600"
              w={35}
              h={35}
              zIndex={999}
            />
          ) : (
            <Icon as={IoMdMenu} color="orange.600" w={35} h={35} zIndex={999} />
          )}
        </Button>
      </Box>

      {/* Overlay and navigation links for small screens when menu is open */}
      {menuOpen && (
        <>
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex="20" // Ensure this zIndex is lower than the header zIndex
            onClick={() => setMenuOpen(false)}
          />
          <Center
            style={{
              display: "flex",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "25", // Ensure this zIndex is higher than the overlay zIndex
            }}
          >
            <List
              display="flex"
              flexDirection="column"
              alignItems="center"
              onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
            >
              {links.map((link) => (
                <ListItem key={link.id} m="5px 0">
                  {link.label}
                </ListItem>
              ))}
            </List>
          </Center>
        </>
      )}

      {/* Navigation links for larger screens */}
      <Center style={{ display: "flex" }}>
        <List display={{ base: "none", md: "flex" }} alignItems="center" _hover={{cursor: "pointer"}} h="100%">
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
              _hover={{ cursor: "pointer"}}
              fontWeight={600}
              onClick={() => scrollIntoView(link.id)}
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
          size="lg"
          aria-label="Portugues"
        >
          <ReactCountryFlag countryCode="BR" svg alt="Bandeira do Brasil" />
        </Button>
        <Button
          onClick={() => handleChangeLanguage("en")}
          className="lang-btn"
          variant="ghost"
          size="lg"
          aria-label="English"
        >
          <ReactCountryFlag countryCode="GB" svg alt="Great Britain Flag"/>
        </Button>
        <Spacer />
        <DarkMode />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
