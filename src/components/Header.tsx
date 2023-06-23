import logo from '../assets/logo.svg'
import styles from './Header.module.css'
export function Header(){
    return(
        <div className={styles.header}>
            <img src={logo} alt="" className={styles.logo}/>
            <nav className={styles.nav_options}>
                <a href="">Home</a>
                <a href="">Service</a>
                <a href="">Feature</a>
                <a href="">Product</a>
                <a href="">Testimonial</a>
                <a href="">FAQ</a>
            </nav>
            <div className={styles.user}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Sign Up</button>
            </div>
        </div>
    )
}