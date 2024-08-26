import { useState, useEffect } from 'react'

import Main from './components/Main';
import Navbar from './components/Navbar';
import ResourceContainer, { ResourceContainerWrap } from './components/ResourceContainer';
import { Campeao, Conhecido, Convidado, Partida } from './models';
import { CardCampeao, CardConhecido, CardConvidado, CardPartida } from './components/Cards';
import { Api } from './api';
import { RESOURCE } from './constants';
import { useResource } from './hooks';
import { CampeaoDetalhes, ConhecidoDetalhes, ConvidadoDetalhes } from './components/Details';

export enum ROUTE {
    CAMPEAO,
    CONHECIDO,
    CONVIDADO,
    PARTIDA,

    CAMPEAO_DETALHES,
    CONHECIDO_DETALHES,
    CONVIDADO_DETALHES,
}

export type RouteHandler = (route: ROUTE, id?: number) => void;

function App() {
    const [totalCampeoes, setTotalCampeoes] = useState<number>(0);
    const [totalConhecidos, setTotalConhecidos] = useState<number>(0);
    const [totalConvidados, setTotalConvidados] = useState<number>(0);
    const [totalPartidas, setTotalPartidas] = useState<number>(0);

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const [activeRoute, setRoute] = useState(ROUTE.PARTIDA);

    useEffect(() => {
        Api.fetchTotal(RESOURCE.CAMPEAO, setTotalCampeoes);
        Api.fetchTotal(RESOURCE.CONHECIDO, setTotalConhecidos);
        Api.fetchTotal(RESOURCE.CONVIDADO, setTotalConvidados);
        Api.fetchTotal(RESOURCE.PARTIDA, setTotalPartidas);
    }, []);

    function handleChangeRoute(route: ROUTE, id?: number) {
        setSelectedId(id ?? null);       
        setRoute(route);
    }

    return (
        <Main>
            <Navbar
                handleChangeRoute={handleChangeRoute}
                campeaoQtd={totalCampeoes}
                conhecidoQtd={totalConhecidos}
                convidadoQtd={totalConvidados}
                partidaQtd={totalPartidas} />

            {activeRoute === ROUTE.CAMPEAO && <ScreenCampeao handleChangeRoute={handleChangeRoute} />}
            {activeRoute === ROUTE.CAMPEAO_DETALHES && selectedId && <CampeaoDetalhes id={selectedId} handleChangeRoute={handleChangeRoute} />}
            {activeRoute === ROUTE.CONHECIDO && <ScreenConhecido handleChangeRoute={handleChangeRoute} />}
            {activeRoute === ROUTE.CONHECIDO_DETALHES && selectedId && <ConhecidoDetalhes id={selectedId} handleChangeRoute={handleChangeRoute} />}
            {activeRoute === ROUTE.CONVIDADO && <ScreenConvidado handleChangeRoute={handleChangeRoute} />}
            {activeRoute === ROUTE.CONVIDADO_DETALHES && selectedId && <ConvidadoDetalhes id={selectedId} handleChangeRoute={handleChangeRoute} />}
            {activeRoute === ROUTE.PARTIDA && <ScreenPartida />}
        </Main>
    )
}

function ScreenPartida() {
    const { resource, loading } = useResource<Partida>(RESOURCE.PARTIDA);

    return (
        <ResourceContainer title="Partidas">
            {!!resource.length && resource.map(c => <CardPartida key={c.id} partida={c} />)}
        </ResourceContainer>
    );
}

function ScreenCampeao({ handleChangeRoute }: { handleChangeRoute: RouteHandler }) {
    const { resource, loading } = useResource<Campeao>(RESOURCE.CAMPEAO);

    function handleClick(id: number) {
        handleChangeRoute(ROUTE.CAMPEAO_DETALHES, id);
    }

    return (
        <ResourceContainerWrap title="Campeao">
            {!!resource.length && resource.map(c => <CardCampeao key={c.id} campeao={c} handleClick={() => handleClick(c.id)} />)}
        </ResourceContainerWrap>
    );
}

function ScreenConhecido({ handleChangeRoute }: { handleChangeRoute: RouteHandler }) {
    const { resource, loading } = useResource<Conhecido>(RESOURCE.CONHECIDO);

    function handleClick(id: number) {
        handleChangeRoute(ROUTE.CONHECIDO_DETALHES, id);
    }

    return (
        <ResourceContainerWrap title="Conhecido">
            {!!resource.length && resource.map(c => <CardConhecido key={c.id} conhecido={c} handleClick={() => handleClick(c.id)} />)}
        </ResourceContainerWrap>
    );
}

function ScreenConvidado({ handleChangeRoute }: { handleChangeRoute: RouteHandler }) {
    const { resource, loading } = useResource<Convidado>(RESOURCE.CONVIDADO);

    function handleClick(id: number) {
        handleChangeRoute(ROUTE.CONVIDADO_DETALHES, id);
    }

    return (
        <ResourceContainerWrap title="Convidado">
            {!!resource.length && resource.map(c => <CardConvidado key={c.id} convidado={c} handleClick={() => handleClick(c.id)} />)}
        </ResourceContainerWrap>
    );
}

export default App
