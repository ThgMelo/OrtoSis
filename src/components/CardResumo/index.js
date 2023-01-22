import './CardResumo.css';

const CardResumo = ({ label, valor }) => {
    return (
        <li className='card-resumo'>
            <h3 className='card-resumo__titulo'>{label}</h3>
            <h4 className='card-resumo__valor'>{valor}</h4>
        </li>
    );
};

export default CardResumo;