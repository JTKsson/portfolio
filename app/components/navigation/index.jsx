import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.scss";

const navItems = {
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Projects",
  },
  "/about": {
    name: "About Me",
  },
  "/contact": {
    name: "Contact",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";

  return (
    <>
      <div className={styles.navBar}>
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          const linkClassName = `${styles["header__navItem"]} ${
            isActive ? styles["navBar__active"] : styles["navBar__nonActive"]
          }`;

          return (
            <Link key={path} href={path} className={linkClassName}>
              <p>{name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
