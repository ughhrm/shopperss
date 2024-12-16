import Footer from '../footer/Footer'
import Header from '../header/Header'
import HeaderLink from '../header/HeaderLink'
import styles from "../layout/Layout.module.scss"

const Layout = ({children}) => {
  return (
    <div className={styles.continer}>
        <Header/>
        <HeaderLink/>
        <main>{children}</main>
        <Footer/>

    </div>
  )
}

export default Layout