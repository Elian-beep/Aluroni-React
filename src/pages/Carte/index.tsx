import styles from './Carte.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Order from './Order';
import Items from './Items';
import stylesTema from 'styles/Theme.module.scss';

export default function Carte() {

  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Search busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filters filtro={filtro} setFiltro={setFiltro} />
        <Order ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Items busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  );
}