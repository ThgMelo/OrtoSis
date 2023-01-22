import './ListaSuspensa.css';

const ListaSuspensa = ({ label, formasDePagamento, aoAlterado, valor }) => {

    const aoDigitado = evento => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor} onChange={aoDigitado}>
                {formasDePagamento.map(forma => <option key={forma}>{forma}</option>)}
            </select>
        </div>
    );
};

export default ListaSuspensa;