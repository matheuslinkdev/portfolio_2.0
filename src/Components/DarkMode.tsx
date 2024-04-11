import React from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import styles from "./style.module.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark")
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme")

  selectedTheme === "dark" ? setDarkMode() : setLightMode()

  const toggleTheme = (e)=>{
    e.target.checked ? setDarkMode() : setLightMode()
  }

  return (
    <div className={styles.dark_mode}>
      <input
        type="checkbox"
        className={styles.dark_mode_input}
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className={styles.dark_mode_label} htmlFor="darkmode-toggle">
        <FaRegMoon color="#151f33" />
        <FaRegSun color="#ffdd00" />
      </label>
    </div>
  );
};

export default DarkMode;
