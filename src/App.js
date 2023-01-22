import Header from "./components/Header";
import Resumo from "./components/Resumo";
import { useState } from 'react';
import Form from "./components/Form";

function App() {

  const formasDePagamento = ['Dinheiro', 'Cartão (Locador)', 'Pix (Locatário)'];

  const data = localStorage.getItem("settings");
  const [settingsList, setSettingsList] = useState(
    data ? JSON.parse(data) : []
  );


  const [nomeLocador, setNomeLocador] = useState(settingsList[0] ? settingsList[0].nome : "");
  const [valorLocador, setValorLocador] = useState(settingsList[0] ? settingsList[0].valor : "");
  const [nomeLocatario, setNomeLocatario] = useState(settingsList[1] ? settingsList[1].nome : "");
  const [valorLocatario, setValorLocatario] = useState(settingsList[1] ? settingsList[1].valor : "");

  return (
    <>
      <Header
        settingsList={settingsList}
        setSettingsList={setSettingsList}
        nomeLocador={nomeLocador}
        setNomeLocador={setNomeLocador}
        valorLocador={valorLocador}
        setValorLocador={setValorLocador}
        nomeLocatario={nomeLocatario}
        setNomeLocatario={setNomeLocatario}
        valorLocatario={valorLocatario}
        setValorLocatario={setValorLocatario}
      />
      <main>
        <Resumo nomeLocador={nomeLocador} nomeLocatario={nomeLocatario} />
        <Form formasDePagamento={formasDePagamento} />
      </main>
    </>
  );
}

export default App;
