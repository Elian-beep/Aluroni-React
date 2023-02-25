import styles from './Dish.module.scss';
import { useParams, useNavigate } from 'react-router-dom';

import carte from 'data/carte.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PageDefault from 'components/PageDefault';

export default function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = carte.find(item => item.id === Number(id));
  if (!prato) {
    return <NotFound />;
  }
  return (
    <PageDefault>
      <button onClick={() => navigate(-1)} className={styles.voltar}> {'< Voltar'} </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
        </div>
        <TagsPrato {...prato} />
      </section>
    </PageDefault>
  );
}