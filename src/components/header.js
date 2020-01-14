import { Link } from "gatsby"
import React, { useState } from "react"
import styles from "./header.module.css"
import menuImage from "../images/menu.png"

const Header = () => {
  const [menu, setMenu] = useState(styles.initMenu)
  console.log(menu)

  //Changes
  let toggleMenu = () => {
    menu === styles.initMenu || menu === styles.closeMenu
      ? setMenu(styles.openMenu)
      : setMenu(styles.closeMenu)
  }
  let closeMenu = () => {
    if (menu === styles.openMenu) {
      setMenu(styles.closeMenu)
    }
  }
  return (
    <header className={styles.header}>
      <button onClick={toggleMenu} className={styles.button}>
        <img src={menuImage} alt="hamburger"></img>
      </button>
      <nav className={menu}>
        <ul className={styles.navbar}>
          <li>
            <Link className={styles.links} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/about/">
              About
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/projects/">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.links} to="/contact/" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
