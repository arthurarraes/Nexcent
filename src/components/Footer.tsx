import styles from './Footer.module.css'
import logo from '../assets/logo-2.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import youtube from '../assets/youtube.svg'

export function Footer(){
    return(
            <section className={styles.footer}>
                <div className={styles.footerLeft}>
                    <img src={logo} alt="" />
                    <h1>Copyright © 2020 Nexcent ltd.</h1>
                    <h1>All rights reserved</h1>
                    <div className={styles.footerIcon}>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.column1}>
                        <h1>Company</h1>
                        <h2>About Us</h2>
                        <h2>Blog</h2>
                        <h2>Contact Us</h2>
                        <h2>Pricings</h2>
                        <h2>Testemonials</h2>
                    </div>
                    <div className={styles.column2}>
                        <h1>Support</h1>
                        <h2>Help Center</h2>
                        <h2>Terms of Service</h2>
                        <h2>Legal</h2>
                        <h2>Privacy policy</h2>
                        <h2>Status</h2>
                    </div>
                </div>
            </section>
    )
}