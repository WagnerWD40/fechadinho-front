import { useState, useEffect } from 'react'

import Main from './components/Main';
import Navbar from './components/Navbar';
import ResourceContainer, { ResourceContainerWrap } from './components/ResourceContainer';
import { Campeao, Conhecido, Convidado, Partida } from './models';
import { CardCampeao, CardConhecido, CardConvidado, CardPartida } from './components/Cards';

const fetchOptions = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  },
}

function fetchList<T>(resource: string, setter: React.Dispatch<React.SetStateAction<T[]>>) {
  fetch(`http://localhost:8080/${resource}/listar`, fetchOptions)
  .then((res) => res.json())
  .then((data) => {
    setter(data);
  }); 
}

export enum ROUTE {
  CAMPEAO,
  CONHECIDO,
  CONVIDADO,
  PARTIDA,
}


function App() {
  const [campeoes, setCampeoes] = useState<Campeao[]>([]);
  const [conhecidos, setConhecidos] = useState<Conhecido[]>([]);
  const [convidados, setConvidados] = useState<Convidado[]>([]);
  const [partidas, setPartidas] = useState<Partida[]>([]);

  const [activeRoute, setRoute] = useState(ROUTE.PARTIDA);

  useEffect(() => {
    fetchList('campeao', setCampeoes);
    fetchList('conhecido', setConhecidos);
    fetchList('convidado', setConvidados);
    fetchList('partida', setPartidas);
  }, []);

  function handleChangeRoute(route: ROUTE) {
    setRoute(route);
  }

  return (
    <Main>
      <Navbar
        handleChangeRoute={handleChangeRoute}
        campeaoQtd={campeoes.length}
        conhecidoQtd={conhecidos.length}
        convidadoQtd={convidados.length}
        partidaQtd={partidas.length}/>

        {activeRoute === ROUTE.CAMPEAO &&
          <ResourceContainerWrap title="Campeões">
            {!!campeoes.length && campeoes.map(c => <CardCampeao key={c.id} campeao={c} />)}
          </ResourceContainerWrap>}

        {activeRoute === ROUTE.CONHECIDO &&
          <ResourceContainerWrap title="Conhecidos">
            {!!conhecidos.length && conhecidos.map(c => <CardConhecido key={c.id} conhecido={c} />)}
          </ResourceContainerWrap>}

        {activeRoute === ROUTE.CONVIDADO &&
          <ResourceContainerWrap title="Convidados">
            {!!convidados.length && convidados.map(c => <CardConvidado key={c.id} convidado={c} />)}
          </ResourceContainerWrap>}

        {activeRoute === ROUTE.PARTIDA &&
          <ResourceContainer title="Partidas">
            {!!partidas.length && partidas.map(p => <CardPartida key={p.id} partida ={p} />)}
          </ResourceContainer>}
        
    </Main>
  )
}

export default App
