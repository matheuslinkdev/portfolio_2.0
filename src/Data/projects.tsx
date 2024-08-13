import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("global");

  const projectList = [
    {
      title: "F1Roster",
      screenshotUrl: "/projects/f1roster.webp",
      description: t("Projects.F1Roster"),
      GitHubLink: "https://github.com/matheuslinkdev/f1_roster",
      deployLink: "https://f1-roster.vercel.app",
      isFinished: true,
      isMobile: false,
      isInEnglish: true,
    },
    {
      title: "brnetwork",
      screenshotUrl: "/projects/brnetwork.webp",
      description: t("Projects.brnetwork"),
      GitHubLink: "",
      deployLink: "https://brnetwork.vercel.app/",
      isFinished: false,
      isMobile: false,
      isInEnglish: false,
    },
    {
      title: "ChatBase",
      screenshotUrl: "/projects/chatbase.webp",
      description: t("Projects.ChatBase"),
      GitHubLink: "https://github.com/matheuslinkdev/chatbase",
      deployLink: "https://chatbase-six.vercel.app/",
      isFinished: true,
      isMobile: false,
      isInEnglish: true,
    },

    {
      title: "EcoMatters",
      screenshotUrl: "/projects/ecomatters.webp",
      description: t("Projects.EcoMatters"),
      GitHubLink: "https://github.com/matheuslinkdev/ecomatters-react",
      deployLink: "https://matheuslinkdev.github.io/ecomatters-react/loja",
      isFinished: true,
      isMobile: false,
      isInEnglish: false,
    },

    {
      title: "MovieVerse",
      screenshotUrl: "/projects/movieverse.webp",
      description: t("Projects.MovieVerse"),
      GitHubLink: "https://github.com/matheuslinkdev/movie-verse",
      deployLink: "https://movieverse-tawny.vercel.app/",
      isFinished: true,
      isMobile: false,
      isInEnglish: true,
    },
    {
      title: "curicoffee",
      screenshotUrl: "/projects/curicoffee.webp",
      description: t("Projects.CuriCoffee"),
      GitHubLink: "https://github.com/matheuslinkdev/curicoffee",
      deployLink: "",
      isFinished: false,
      isMobile: true,
      isInEnglish: false,
    },
    {
      title: "GameLinker",
      screenshotUrl: "/projects/game-linker.webp",
      description: t("Projects.GameLinker"),
      GitHubLink: "https://github.com/matheuslinkdev/game_linker",
      deployLink: "https://game-linker.vercel.app/",
      isFinished: true,
      isMobile: false,
      isInEnglish: true,
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
