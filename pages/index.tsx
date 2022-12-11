import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WebsiteHeader from "../components/website-header";
import ProductCard from "../components/product-card/product-card";


export default function Home() {

  return (
    <div className={styles.container}>
      <WebsiteHeader />
      <main className={styles.main}>

        <ProductCard itemName={'Many Europes textbook [Sample]'}
                     pic={"/manyeuropespic.png"} 
                     date={'11/30/2022'} 
                     cost={'$25'} 
                     description={'Needed for most history classes'} 
                     contact={'Miriam D 000-000-0000'} 
                     />

        <ProductCard itemName={'Almond milk [Sample]'}
                     pic={"almondmilkpic.png"} 
                     date={'11/29/2022'} 
                     cost={'$3'} 
                     description={'Unopened, bought by mistake. OUD'} 
                     contact={'Miriam D 000-000-0000'} 
                     />

        <ProductCard itemName={'Maxi skirt [Sample]'}
                     pic={"/skirtpic.png"} 
                     date={'11/20/2022'} 
                     cost={'$65'} 
                     description={'Bought for $65 and only wore once. Size S but fit like an M. Super cute!!!! Willing to negotiate'} 
                     contact={'Miriam D 000-000-0000'} 
                     />

        <ProductCard itemName={'LSAT Prep Book [Sample]'}
                     pic={"/lsatbookpic.png"} 
                     date={'11/15/2022'} 
                     cost={'$15'} 
                     description={''} 
                     contact={'Miriam D 000-000-0000'} 
                     />
      </main>
    </div>
  )
}
