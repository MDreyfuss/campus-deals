import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Campus Deals</title>
        <link rel="icon" href="/icon_nobackground.png" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logoholder}>
          <img src="/logo_final.png" className={styles.img}/>
        </div>
        <button className={styles.button}>List a Product</button>
      </header>
      <main className={styles.main}>
          <a className={styles.card}>
            <img src="/icon.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Many Europes textbook</h2>
            <p className={styles.date}>08/10/2022</p>
            <p className={styles.cost}>$25</p>
            <p className={styles.description}>Needed for most history classes</p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>

          <a className={styles.card}>
            <img src="/icon.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Many Europes textbook</h2>
            <p className={styles.date}>date posted</p>
            <p className={styles.cost}>$cost</p>
            <p className={styles.description}>Needed for most history classes</p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>

          <a className={styles.card}>
            <img src="/icon.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Many Europes textbook</h2>
            <p className={styles.date}>date posted</p>
            <p className={styles.cost}>$cost</p>
            <p className={styles.description}>Needed for most history classes</p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>


          <a className={styles.card}>
            <img src="/icon.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Many Europes textbook</h2>
            <p className={styles.date}>date posted</p>
            <p className={styles.cost}>$cost</p>
            <p className={styles.description}>Needed for most history classes</p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>
      </main>
    </div>
  )
}
