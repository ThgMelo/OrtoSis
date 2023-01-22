import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Form.css';

const Form = ({ handleAdd, atendimentosList, setAtendimentosList, formasDePagamento }) => {
    const [paciente, setPaciente] = useState('');
    const [formaPagamento, setFormaPagamento] = useState('Dinheiro');

    const handleSave = evento => {
        evento.preventDefault();

        if (paciente === "") {
            alert('Digite o nome do paciente');
            return;
        } else if (formaPagamento === "") {
            alert('Informe a forma de pagamento');
            return;
        }

        const atendimento = {
            paciente: paciente,
            formaPagamento: formaPagamento,
        };

        handleAdd(atendimento);

        setPaciente('');
        setFormaPagamento('Dinheiro');
    }

    return (
        <form className="form">
            <CampoTexto
                label="Paciente"
                tipo="text"
                valor={paciente}
                aoAlterado={valor => setPaciente(valor)}
            />
            <ListaSuspensa
                label="Pagamento"
                formasDePagamento={formasDePagamento}
                valor={formaPagamento}
                aoAlterado={valor => setFormaPagamento(valor)}
            />
            <button className="form__botao" onClick={handleSave}>Salvar</button>
        </form>
    );
};

export default Form;