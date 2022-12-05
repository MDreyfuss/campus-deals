import styles from './website-header.module.css';
import Link from 'next/link';
import Head from 'next/head'

export default function WebsiteHeader() {
    return(
      <>
        <Head>
          <title>Campus Deals</title>
          <link rel="icon" href="/icon_nobackground.png" />
        </Head>
        <header className={styles.header}>
          <div className={styles.logoholder}>
            <Link href="/">
              <img src="/logo_final.png" className={styles.img} />
            </Link>
          </div>
          <Link href="/list-new">
            <button className={styles.button}>List a Product</button>
          </Link>
        </header></>
    );
}