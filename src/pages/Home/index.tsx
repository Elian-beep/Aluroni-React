import carte from 'data/carte.json';
import style from './Home.module.scss';

export default function Home() {
  let pratosRecomendados = [...carte];
  pratosRecomendados = pratosRecomendados.sort(() => .5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={style.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map(item => (
          <div className={style.recomendado} key={item.id}>
            <div className={style.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={style.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}