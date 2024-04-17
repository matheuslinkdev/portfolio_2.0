// projects.tsx
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("global");

  const projectList = [
    {
      title: "CryptoLine",
      screenshotUrl: "",
      description: t("Projects.CryptoLine"),
      GitHubLink: "",
      deployLink: "",
      isFinished: false
    },
    {
      title: "F1Roster",
      screenshotUrl: "",
      description: t("Projects.F1Roster"),
      GitHubLink: "",
      deployLink: "",
      isFinished: true
    },
    {
      title: "InovaTech",
      screenshotUrl: "",
      description: t("Projects.InovaTech"),
      GitHubLink: "",
      deployLink: "",
      isFinished: false
    },
  ];

  return projectList;
};

export default Projects;
