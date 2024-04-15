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
      <div>
        <ul style={{display: "flex"}}>
          <li>{t("header.home")}</li>
          <li>{t("header.about")}</li>
          <li>{t("header.skills")}</li>
          <li>{t("header.projects")}</li>
          <li>{t("header.contact")}</li>
        </ul>
      </div>
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
