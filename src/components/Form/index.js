import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Form.css';

const Form = ({ formasDePagamento }) => {
    return (
        <form className="form">
            <CampoTexto label="Paciente" tipo="text" />
            <ListaSuspensa label="Pagamento" formasDePagamento={formasDePagamento} />
            <button className="form__botao">Salvar</button>
        </form>
    );
};

export default Form;