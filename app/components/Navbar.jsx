import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        <Link href={"/about"}>About Us</Link>
        <Link href={"/vision"}>Our Vision</Link>
        <Link href={"/mission"}>Our Mission</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/careers"}>Careers</Link>
      </div>
    </div>
  );
};

export default Navbar;
