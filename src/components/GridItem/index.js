import './GridItem.css';

const GridItem = ({ paciente, onDelete }) => {
    return (
        <tr className="grid-item__line">
            <td className="grid-item__item">{paciente.paciente}</td>
            <td className="grid-item__item">{paciente.formaPagamento}</td>
            <td className="grid-item__item">
                <img src="./images/lixeira.png" alt="Lixeira" onClick={() => onDelete(paciente.paciente)} className="grid-item__imagem" />
            </td>
        </tr>
    );
};

export default GridItem;