import GridItem from '../GridItem';
import './Grid.css';

const Grid = ({ atendimentos, setAtendimentos }) => {

    const onDelete = nome => {
        const newArray = atendimentos.filter(atendimento => atendimento.paciente !== nome);
        setAtendimentos(newArray);
        localStorage.setItem("atendimentos", JSON.stringify(newArray));
    }

    return (
        <table className="grid">
            <thead>
                <tr>
                    <th className="grid__cabecalho--item">Paciente</th>
                    <th className="grid__cabecalho--item">Pagamento</th>
                    <th className="grid__cabecalho--item"></th>
                </tr>
            </thead>
            <tbody>
                {atendimentos?.map((paciente, index) => <GridItem key={index} paciente={paciente} onDelete={onDelete} />)}
            </tbody>
        </table>
    );
};

export default Grid;