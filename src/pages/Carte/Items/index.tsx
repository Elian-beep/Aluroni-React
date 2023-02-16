import styles from "./Items.module.scss";
import carte from "./items.json";
import Item from "./Item";

export default function Items(){
    return(
        <div className={styles.itens}>
            {carte.map(item => (
                <Item key={item.id} />
            ))}
        </div>
    );
}