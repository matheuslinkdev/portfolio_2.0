import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("global");

  const projectList = [
    {
      title: "CryptoLine",
      screenshotUrl: "https://i.ibb.co/7RpDh0x/cryptoline.png",
      description: t("Projects.CryptoLine"),
      GitHubLink: "https://github.com/matheuslinkdev/crypto_line",
      deployLink: "https://crypto-line.vercel.app/",
      isFinished: false,
    },
    {
      title: "Polyngo",
      screenshotUrl: "https://i.ibb.co/sHC0fQ6/polyngo.png",
      description: t("Projects.Polyngo"),
      GitHubLink: "https://github.com/matheuslinkdev/Polyngo",
      deployLink: "",
      isFinished: false,
    },
    {
      title: "F1Roster",
      screenshotUrl: "https://i.ibb.co/Mh76d1q/f1roster.png",
      description: t("Projects.F1Roster"),
      GitHubLink: "https://github.com/matheuslinkdev/f1_roster",
      deployLink: "https://matheuslinkdev.github.io/f1_roster/",
      isFinished: true,
    },
    {
      title: "EcoMatters",
      screenshotUrl: "https://i.ibb.co/52fXbH7/ecomatters.png",
      description: t("Projects.EcoMatters"),
      GitHubLink: "https://github.com/matheuslinkdev/ecomatters-react",
      deployLink: "https://matheuslinkdev.github.io/ecomatters-react/loja",
      isFinished: true,
    },
    {
      title: "CadFunc",
      screenshotUrl: "https://i.ibb.co/RY8vfBf/cadfunc.png",
      description: t("Projects.CadFunc"),
      GitHubLink: "https://github.com/matheuslinkdev/gerenciador-funcionarios",
      deployLink: "",
      isFinished: true,
    },
    {
      title: "ByteBank",
      screenshotUrl: "https://i.ibb.co/Lk07mf5/bytebank.png",
      description: t("Projects.ByteBank"),
      GitHubLink: "https://github.com/matheuslinkdev/bytebank-alura",
      deployLink:
        "https://bytebank-tests-nu6x0fhot-matheus-links-projects.vercel.app/",
      isFinished: true,
    },
  ];

  return projectList;
};

export default Projects;

/*

<a href="https://ibb.co/gmYjNPN"><img src="https://i.ibb.co/RY8vfBf/cadfunc.png" alt="cadfunc" border="0"></a>
<a href="https://ibb.co/nn1ypKq"><img src="https://i.ibb.co/7RpDh0x/cryptoline.png" alt="cryptoline" border="0"></a>
<a href="https://ibb.co/d7zs8Yh"><img src="https://i.ibb.co/52fXbH7/ecomatters.png" alt="ecomatters" border="0"></a>
<a href="https://ibb.co/JdHQZpX"><img src="https://i.ibb.co/Mh76d1q/f1roster.png" alt="f1roster" border="0"></a>
<a href="https://ibb.co/X4f6kdJ"><img src="https://i.ibb.co/H2LRpMg/inovatech.png" alt="inovatech" border="0"></a>
<a href="https://ibb.co/9WkZ34W"><img src="https://i.ibb.co/HqfhpPq/login.png" alt="login" border="0"></a>
<a href="https://ibb.co/dfzSmjm"><img src="https://i.ibb.co/BfSmncn/movieverse.png" alt="movieverse" border="0"></a>
<a href="https://ibb.co/4d26qMY"><img src="https://i.ibb.co/sHC0fQ6/polyngo.png" alt="polyngo" border="0"></a>
*/