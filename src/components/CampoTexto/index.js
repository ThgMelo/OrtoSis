import "./CampoTexto.css";

const CampoTexto = ({ label, tipo, aoAlterado, valor }) => {

    const aoDigitado = evento => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} placeholder={label} type={tipo} onChange={aoDigitado} />
        </div>
    );
}

export default CampoTexto;