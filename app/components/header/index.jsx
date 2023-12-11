import Navbar from "../navigation"
import Styles from "./header.module.scss"

const Header = () => {

  return(
    <div className={Styles.header}>
      <h1 className={Styles["header__title"]}>Timothy Karlsson Portfolio</h1>
      <Navbar/>
    </div>
  )
}

export default Header