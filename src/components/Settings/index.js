import CampoTexto from '../CampoTexto';
import './Settings.css';

const Settings = ({
    onClose,
    settingsList,
    setSettingsList,
    nomeLocador,
    setNomeLocador,
    valorLocador,
    setValorLocador,
    nomeLocatario,
    setNomeLocatario,
    valorLocatario,
    setValorLocatario
}) => {

    const aoSalvar = evento => {
        evento.preventDefault();

        if (!window.confirm("Você realmente deseja alterar as configurações?")) return;

        const settings = [
            {
                nome: nomeLocador,
                valor: valorLocador
            },
            {
                nome: nomeLocatario,
                valor: valorLocatario
            }
        ]

        setSettingsList(settings);
        localStorage.setItem("settings", JSON.stringify(settings));
        onClose();
    }

    return (
        <section className="settings" id="modal-settings">
            <header className="settings__header">
                <h2 className="settings__header--titulo">Configurações</h2>
                <button className="settings__header--fechar" aria-label="Fechar Modal" onClick={() => onClose()}>X</button>
            </header>
            <form onSubmit={aoSalvar}>
                <div>
                    <CampoTexto label="Nome Locador" tipo="text" valor={nomeLocador} aoAlterado={valor => setNomeLocador(valor)} />
                    <CampoTexto label="Valor Locador" tipo="number" valor={valorLocador} aoAlterado={valor => setValorLocador(valor)} />
                </div>
                <div>
                    <CampoTexto label="Nome Locatário" tipo="text" valor={nomeLocatario} aoAlterado={valor => setNomeLocatario(valor)} />
                    <CampoTexto label="Valor Locatário" tipo="number" valor={valorLocatario} aoAlterado={valor => setValorLocatario(valor)} />
                </div>
                <button className="settings__botao" >Salvar Alterações</button>
            </form>
        </section>
    );
}

export default Settings;