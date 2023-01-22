import './ListaSuspensa.css';

const ListaSuspensa = ({ label, formasDePagamento }) => {

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select>
                {formasDePagamento.map(forma => <option key={forma}>{forma}</option>)}
            </select>
        </div>
    );
};

export default ListaSuspensa;