import carte from 'data/carte.json';
import style from './Home.module.scss';
import stylesTema from 'styles/Theme.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/Prato';

export default function Home() {
  let pratosRecomendados = [...carte];
  pratosRecomendados = pratosRecomendados.sort(() => .5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParadetalhes(prato: Dish){
    navigate(`/dish/${prato.id}`, { state: { prato } });
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map(item => (
          <div className={style.recomendado} key={item.id}>
            <div className={style.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button onClick={() => redirecionarParadetalhes(item)} className={style.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={style.nossaCasa}>
        <img src={nossaCasa} alt="casa do aluroni" />
        <div className={style.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br /><br />Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}