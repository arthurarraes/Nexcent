import firstImage from '../assets/firstImage.svg'
import styles from './Body.module.css'
import clients from '../assets/clients.svg'
import membership from '../assets/membership.svg'
import national from '../assets/national.svg'
import clubs from '../assets/clubs.svg'
import unlock from '../assets/unlock.svg'
import calendar from '../assets/calendar.svg'
import costumer from '../assets/costumer.svg'
import costumer_2 from '../assets/costumer-2.svg'

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
            <section className={styles.unlock}>
                <img src={unlock} alt="" />
                <div className={styles.unlockRight}>
                    <h1>The unseen of spending three years at Pixelgrade</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</h2>
                    <button className={styles.learnMore}>Learn More</button>
                </div>
            </section>
            <section className={styles.costumer}>
            <img src={costumer} alt="" />
            <div className={styles.costumerRight}>
                <h1>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</h1>
                <h2>Tim Smith</h2>
                <h3>British Dragon Boat Racing Association</h3>
                <img src={costumer_2} alt="" />
            </div>
            </section>
            <section className={styles.calendar}>
                <img src={calendar} alt="" />
                <div className={styles.calendarRight}>
                    <h1>How to design your site footer like we did</h1>
                    <h2>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</h2>
                    <button className={styles.learnMore}>Learn More</button>
                </div>
            </section>
        </div>
    )
}