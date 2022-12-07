import WebsiteHeader from "../components/website-header";
import styles from '../styles/list-new.module.css'


export default function ListNew() {
    return (
        <div>
            <WebsiteHeader />

            <main className={styles.main}>

            <card>
            <form action="/send-data-here" method="post" className={styles.form}>
                <label for="itemTitle"  className={styles.label}>Title</label>
                <input type="text" id="itemTitle" name="itemTitle" className={styles.textInput}/>

                <label for="itemImage"className={styles.label}>Upload Image</label>
                <img src="/UploadIcon.png" className={styles.img}/>

                <label for="itemCost"className={styles.label}>Cost</label>
                <input type="text" id="itemCost" name="itemCost" className={styles.textInput}/>

                <label for="itemDescription"className={styles.label}>Description</label>
                <textarea type="text" id="itemDescription" name="itemDescription" className={styles.textInput}/>

                <label for="itemContact"className={styles.label}>Name and Contact Info</label>
                <input type="text" id="itemContact" name="itemContact" className={styles.textInput}/>

                <button type="submit" className={styles.button}>Submit</button>
            </form>
            </card>
            </main>

        </div>
    );
  }