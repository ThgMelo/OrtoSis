import Settings from '../Settings';
import './Header.css';
import { useState } from 'react';

const Header = () => {

    const [isSettingsVisible, setIsSettingsVisible] = useState(false);

    return (
        <header className="header">
            <a href="./index.html" className="header__logo">
                <img src="./images/icone.png" alt="Logo OrtoSis" className="header__logo--imagem" />
                <p className="header__logo--texto">Orto<span>Sis</span></p>
            </a>
            <button className="header__config" aria-label="Menu de configurações" onClick={() => setIsSettingsVisible(true)}>
                <img src="./images/configuracoes.png" alt="" className="header__config--imagem" />
            </button>
            {
                isSettingsVisible ? <Settings onClose={() => setIsSettingsVisible(false)} /> : null
            }

        </header>
    );
};

export default Header;