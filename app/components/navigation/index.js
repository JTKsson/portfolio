import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";

const navItems = {
  "/": {
    name: "Home",
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
          const linkClassName = `${styles.navItem} ${
            isActive ? styles.active : styles.nonActive
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
