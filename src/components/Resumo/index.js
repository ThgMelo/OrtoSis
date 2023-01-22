import './Resumo.css';
import CardResumo from "../CardResumo";

const Resumo = ({ nomeLocador, nomeLocatario }) => {
    return (
        <section className="resumo">
            <div>
                <h2 className="resumo__titulo">{nomeLocador}</h2>
                <ul className="resumo__lista">
                    <CardResumo />
                    <CardResumo />
                    <CardResumo />
                </ul>
            </div>
            <div>
                <h2 className="resumo__titulo">{nomeLocatario}</h2>
                <ul className="resumo__lista">
                    <CardResumo />
                    <CardResumo />
                    <CardResumo />
                </ul>
            </div>
        </section>
    );
};

export default Resumo;