import firstImage from '../assets/firstImage.svg'
import styles from './Body.module.css'
import clients from '../assets/clients.svg'
import membership from '../assets/membership.svg'
import national from '../assets/national.svg'
import clubs from '../assets/clubs.svg'
export function Body(){
    return(
        <div className={styles.body}>
            <section className={styles.principalPage}>
                <div className={styles.principalPage_left}>
                    <h1>Lessons and insights <span>from 8 years</span></h1>
                    <h2>Where to grow your business as a photographer: site or social media?</h2>
                    <button className={styles.register}>Register</button>
                </div>
                <img src={firstImage} className={styles.firstImage} alt="" />
            </section>
            <section className={styles.clients}>
                <h1>Our Clients</h1>
                <h2>We have been working with some Fortune 500+ clients</h2>
                <img src={clients} alt="" />
            </section>
            <section className={styles.community}>
                <h1>Manage your entire community in a single system</h1>
                <h2>Who is Nextcent suitable for?</h2>
                <div className={styles.who}>
                    <div className={styles.options}>
                        <img src={membership} alt="" />
                        <h1>Membership Organisations</h1>
                        <h2>Our membership management software provides full automation of membership renewals and payments</h2>
                    </div>
                    <div className={styles.options}>
                        <img src={national} alt="" />
                        <h1>National Associations</h1>
                        <h2>Our membership management software provides full automation of membership renewals and payments</h2>
                    </div>
                    <div className={styles.options}>
                        <img src={clubs} alt="" />
                        <h1>Clubs And Groups</h1>
                        <h2>Our membership management software provides full automation of membership renewals and payments</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}