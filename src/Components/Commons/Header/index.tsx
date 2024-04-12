import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import DarkMode from "../../Theme/DarkMode";

const Header = () => {
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [t, i18n] = useTranslation("global");
  return (
    <header>
      {t("header.home")}
      <div>
        <button onClick={() => handleChangeLanguage("pt")}>
          <ReactCountryFlag countryCode="BR" svg />
        </button>
        <button onClick={() => handleChangeLanguage("en")}>
          <ReactCountryFlag countryCode="GB" svg />
        </button>
      </div>

      <DarkMode />
    </header>
  );
};

export default Header;
