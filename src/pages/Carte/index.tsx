import styles from './Carte.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Order from './Order';
import Items from './Items';

export default function Carte(){

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return(
    <main>
      <header className={styles.header}>
        <div className={styles.header__text}>
                    A casa do código e da amassa
        </div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Search busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filters filtro={filtro} setFiltro={setFiltro} />
          <Order ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Items busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}