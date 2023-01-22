import Header from "./components/Header";
import Resumo from "./components/Resumo";
import { useEffect, useState } from 'react';
import Form from "./components/Form";
import Grid from "./components/Grid";

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

  const dbAtendimentos = localStorage.getItem("atendimentos");
  const [atendimentosList, setAtendimentosList] = useState(
    dbAtendimentos ? JSON.parse(dbAtendimentos) : []
  );

  const [totalLocador, setTotalLocador] = useState(0);
  const [totalDinheiroLocador, setTotalDinheiroLocador] = useState(0);
  const [totalCartaoLocador, setTotalCartaoLocador] = useState(0);

  const [totalLocatario, setTotalLocatario] = useState(0);
  const [totalDinheiroLocatario, setTotalDinheiroLocatario] = useState(0);
  const [totalPixLocatario, setTotalPixLocatario] = useState(0);

  useEffect(() => {
    const calcTotalLocador = (atendimentosList.length * valorLocador).toFixed(2);
    setTotalLocador(`R$ ${calcTotalLocador}`);

    const qtdCartao = (atendimentosList.filter(atendimento => atendimento.formaPagamento === "Cartão (Locador)").length);
    const calcTotalCartao = (qtdCartao * (parseFloat(valorLocador) + parseFloat(valorLocatario))).toFixed(2);
    setTotalCartaoLocador(`R$ ${calcTotalCartao}`);

    setTotalDinheiroLocador(`R$ ${(calcTotalLocador - calcTotalCartao).toFixed(2)}`);


    const calcTotalLocatario = (atendimentosList.length * valorLocatario).toFixed(2);
    setTotalLocatario(`R$ ${calcTotalLocatario}`);

    const qtdPix = (atendimentosList.filter(atendimento => atendimento.formaPagamento === "Pix (Locatário)").length);
    const calcTotalPix = (qtdPix * (parseFloat(valorLocador) + parseFloat(valorLocatario))).toFixed(2);
    setTotalPixLocatario(`R$ ${calcTotalPix}`)

    setTotalDinheiroLocatario(`R$ ${(calcTotalLocatario - calcTotalPix).toFixed(2)}`)

  }, [atendimentosList, valorLocador, valorLocatario]);

  const handleAdd = (atendimento) => {
    const newArrayAtendimentos = [...atendimentosList, atendimento];

    setAtendimentosList(newArrayAtendimentos);

    localStorage.setItem("atendimentos", JSON.stringify(newArrayAtendimentos));
  }

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
        <Resumo
          nomeLocador={nomeLocador}
          nomeLocatario={nomeLocatario}
          totalLocador={totalLocador}
          totalCartaoLocador={totalCartaoLocador}
          totalDinheiroLocador={totalDinheiroLocador}
          totalLocatario={totalLocatario}
          totalPixLocatario={totalPixLocatario}
          totalDinheiroLocatario={totalDinheiroLocatario}
        />
        <Form
          handleAdd={handleAdd}
          atendimentosList={atendimentosList}
          setAtendimentosList={setAtendimentosList}
          formasDePagamento={formasDePagamento}
        />
        <Grid atendimentos={atendimentosList} setAtendimentos={setAtendimentosList} />
      </main>
    </>
  );
}

export default App;
