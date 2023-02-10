import styles from "./Carte.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";

export default function Carte(){

    const [busca, setBusca] = useState("");

    return(
        <main>
            <nav className={styles.menu}>
                <Logo />
                Aluroni
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da amassa
                </div>
            </header>

            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Search busca={busca} setBusca={setBusca} />
            </section>
        </main>
    );
}