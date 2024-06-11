// main.tsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import global_en from "./translations/en/global.json";
import global_pt from "./translations/pt/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { Providers } from "./providers";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "pt",
  resources: {
    pt: {
      global: global_pt,
    },
    en: {
      global: global_en,
    },
  },
});

// Função para atualizar a tag meta com base no idioma
const updateMetaDescription = (language: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    if (language.startsWith("pt")) {
      metaDescription.setAttribute(
        "content",
        "Desenvolvedor Front-End Freelancer com proficiência em React JS, Next JS, React Native, JavaScript, TypeScript e Node JS, além de HTML e CSS."
      );
    } else {
      metaDescription.setAttribute(
        "content",
        "Freelance Front-End Developer proficient in React JS, Next JS, React Native, JavaScript, TypeScript, and Node JS, as well as HTML and CSS."
      );
    }
  }
};

// Adiciona um ouvinte para alterações no idioma e atualiza a descrição meta quando o idioma for alterado
i18next.on("languageChanged", (language) => {
  updateMetaDescription(language);
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Providers>
        <App />
        <Analytics />
        <SpeedInsights/>
      </Providers>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Atualiza a tag meta com base no idioma atual quando o aplicativo é carregado inicialmente
updateMetaDescription(i18next.language);
