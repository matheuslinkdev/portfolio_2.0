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
  textColor: string | number;
  bgColor: string | number;
  btnFunction: () => void;
}