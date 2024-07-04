import React from "react";

export interface TooltipProps {
  children: React.ReactNode;
  title: string;
}

export interface AnimatedComponentProps {
  children: React.ReactNode;
}

export interface RedirectBtnProps {
  label: string;
  link: string;
  textColor: string;
  bgColor: string;
  btnFunction: () => void;
}

export interface ProjectProps {
  project: {
    title: string;
    description: string;
    GitHubLink: string;
    deployLink: string;
    isInEnglish: boolean;
  };
}
