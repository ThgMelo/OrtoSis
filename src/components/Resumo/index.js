import './Resumo.css';
import CardResumo from "../CardResumo";

const Resumo = ({
    nomeLocador,
    nomeLocatario,
    totalLocador,
    totalCartaoLocador,
    totalDinheiroLocador,
    totalLocatario,
    totalPixLocatario,
    totalDinheiroLocatario,
}) => {
    return (
        <section className="resumo">
            <div>
                <h2 className="resumo__titulo">{nomeLocador}</h2>
                <ul className="resumo__lista">
                    <CardResumo label="Total Geral" valor={totalLocador} />
                    <CardResumo label="Total Dinheiro" valor={totalDinheiroLocador} />
                    <CardResumo label="Total Cartão" valor={totalCartaoLocador} />
                </ul>
            </div>
            <div>
                <h2 className="resumo__titulo">{nomeLocatario}</h2>
                <ul className="resumo__lista">
                    <CardResumo label="Total Geral" valor={totalLocatario} />
                    <CardResumo label="Total Dinheiro" valor={totalDinheiroLocatario} />
                    <CardResumo label="Total Pix" valor={totalPixLocatario} />
                </ul>
            </div>
        </section>
    );
};

export default Resumo;