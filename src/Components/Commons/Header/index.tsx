import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import DarkMode from "../../Theme/DarkMode";

const Header = () => {
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const scrollIntoView = (id: string) => {
    document.getElementById(id)!.scrollIntoView({ behavior: "smooth" });
  };

  const [t, i18n] = useTranslation("global");

  return (
    <header>
      <div>
        <ul style={{ display: "flex" }}>
          <a onClick={() => scrollIntoView("homePage")}>{t("header.home")}</a>
          <a onClick={() => scrollIntoView("aboutmePage")}>
            {t("header.about")}
          </a>
          <a onClick={() => scrollIntoView("skillsPage")}>
            {t("header.skills")}
          </a>
          <a onClick={() => scrollIntoView("projectsPage")}>
            {t("header.projects")}
          </a>
          <a onClick={() => scrollIntoView("contactPage")}>
            {t("header.contact")}
          </a>
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
