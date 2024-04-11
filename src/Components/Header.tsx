import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import DarkMode from "./DarkMode";

const Header = () => {
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [t, i18n] = useTranslation("global");
  return (
    <header>
      {t("header.home")}
      <button onClick={() => handleChangeLanguage("pt")}>
        <ReactCountryFlag countryCode="BR" svg />
      </button>
      <button onClick={() => handleChangeLanguage("en")}>
        <ReactCountryFlag countryCode="GB" svg />
      </button>

      <DarkMode/>
    </header>
  );
};

export default Header;
