import filtros from "./filters.json";
import styles from "./Filter.module.scss";

type IOpcao = typeof filtros[0];

export default function Filters(){

    function selecionarFiltro(opcao : IOpcao){}

    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)} > {opcao.label} </button>
            ))}
        </div>
    );
}