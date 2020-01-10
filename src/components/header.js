import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"
const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
