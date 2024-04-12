import { useTranslation } from "react-i18next"

const Home = () => {

const [t, i18n] = useTranslation("global")

  return (
    <main>
        <p>
        {t("HomePage.introduction")}
        </p>
    </main>
  )
}

export default Home