import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WebsiteHeader from "../components/website-header";


export default function Home() {

  return (
    <div className={styles.container}>
      <WebsiteHeader />
      <main className={styles.main}>
          <a className={styles.card}>
            <img src="/manyeuropespic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Many Europes textbook [Sample]</h2>
            <p className={styles.date}>11/30/2022</p>
            <p className={styles.cost}>$25</p>
            <p className={styles.description}>Needed for most history classes</p>
            <p className={styles.contact}>Miriam D 000-000-0000 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>

          <a className={styles.card}>
            <img src="/almondmilkpic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Almond milk [Sample]</h2>
            <p className={styles.date}>11/29/2022</p>
            <p className={styles.cost}>$3</p>
            <p className={styles.description}>Unopened, bought by mistake. OUD</p>
            <p className={styles.contact}>Miriam D 000-000-0000 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>

          <a className={styles.card}>
            <img src="/skirtpic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Maxi skirt [Sample]</h2>
            <p className={styles.date}>11/20/2022</p>
            <p className={styles.cost}>$50</p>
            <p className={styles.description}>Bought for $65 and only wore once. Size S but fit like an M. Super cute!!!! Willing to negotiate</p>
            <p className={styles.contact}>Miriam D 000-000-0000 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>


          <a className={styles.card}>
            <img src="/lsatbookpic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>LSAT Prep Book [Sample]</h2>
            <p className={styles.date}>11/15/2022</p>
            <p className={styles.cost}>$15</p>
            <p className={styles.description}></p>
            <p className={styles.contact}>Miriam D 000-000-0000 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>
      </main>
    </div>
  )
}
