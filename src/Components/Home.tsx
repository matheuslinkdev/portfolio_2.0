import { useTranslation } from "react-i18next"

const Home = () => {

const [t, i18n] = useTranslation("global")

  return (
    <div>
        <p>
        {t("HomePage.introduction")}
        </p>
    </div>
  )
}

export default Home