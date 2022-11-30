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
            <img src="/manyeuropespic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Many Europes textbook</h2>
            <p className={styles.date}>11/30/2022</p>
            <p className={styles.cost}>$25</p>
            <p className={styles.description}>Needed for most history classes</p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>

          <a className={styles.card}>
            <img src="/almondmilkpic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Almond milk</h2>
            <p className={styles.date}>11/29/2022</p>
            <p className={styles.cost}>$3</p>
            <p className={styles.description}>Unopened, bought by mistake. OUD</p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>

          <a className={styles.card}>
            <img src="/skirtpic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>Maxi skirt</h2>
            <p className={styles.date}>11/20/2022</p>
            <p className={styles.cost}>$50</p>
            <p className={styles.description}>Bought for $65 and only wore once. Size S but fit like an M. Super cute!!!! Willing to negotiate</p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>


          <a className={styles.card}>
            <img src="/lsatbookpic.png" className={styles.img}/>
            <div className = {styles.textDiv}>
            <h2>LSAT Prep Book</h2>
            <p className={styles.date}>08/10/2022</p>
            <p className={styles.cost}>$15</p>
            <p className={styles.description}></p>
            <p className={styles.contact}>Miriam Dreyfuss - 3054931031 </p>
            <button className={styles.button}>Buy Now</button>
            </div>
          </a>
      </main>
    </div>
  )
}
