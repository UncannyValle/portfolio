import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import styles from "./header.module.css"
const Header = () => {
  const [currentTab, setCurrentTab] = useState("home")

  const tabStyles = tab => (currentTab === tab ? styles.currentTab : null)

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link className={tabStyles("home")} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={tabStyles("about")}
              onClick={setCurrentTab("about")}
              to="/about/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={tabStyles("projects")}
              onClick={setCurrentTab("projects")}
              to="/projects/"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={tabStyles("contact")}
              onClick={setCurrentTab("contact")}
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
