import styles from './product-card.module.css';

export default function WebsiteHeader({pic, itemName, date, cost, description, contact}) {
    return(
        <a className={styles.card}>
        <img src={pic ? pic : '/placeholder.png'} className={styles.img}/>
        <div className = {styles.textDiv}>
        <h2>{itemName}</h2>
        <p className={styles.date}>{date}</p>
        <p className={styles.cost}>{cost}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.contact}>{contact}</p>
        <button className={styles.button}>Buy Now</button>
        </div>
      </a>
    );
}