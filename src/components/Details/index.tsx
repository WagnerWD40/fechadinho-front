import { Button } from '@mantine/core';

import { Campeao, Conhecido, Convidado } from '../../models';

import ResourceContainer from '../ResourceContainer';

import { RESOURCE } from '../../constants';
import { useResourceDetails } from '../../hooks';
import * as S from './styles';

import { ROUTE, RouteHandler } from '../../App';
import ChampionIcon from '../ChampionIcon';


export function CampeaoDetalhes({ id, handleChangeRoute }: { id: number, handleChangeRoute: RouteHandler }) {
    const { resource: campeao, loading } = useResourceDetails<Campeao>(id, RESOURCE.CAMPEAO);

    return (
        <>    
        {campeao && 
            <ResourceContainer title={campeao.nome}>
                <S.ActionContainer>
                    <Button
                        variant='outline'
                        onClick={() => handleChangeRoute(ROUTE.CAMPEAO)}
                        color="violet">
                        Voltar
                    </Button>
                </S.ActionContainer>
                <S.Container>
                    <S.Avatar size={100}>
                        {/* <ChampionIcon campeao={campeao} size={100} /> */}
                    </S.Avatar>
                    <S.Detalhes>
                        <Detalhe label="Id" value={campeao.id} />
                        <Detalhe label="Nome" value={campeao.nome} />
                        <Detalhe label="Id Riot" value={campeao.idRiot} />
                    </S.Detalhes>
                </S.Container>

            </ResourceContainer> }
        </>
    );
}

export function ConhecidoDetalhes({ id, handleChangeRoute }: { id: number, handleChangeRoute: RouteHandler }) {
    const { resource: conhecido, loading } = useResourceDetails<Conhecido>(id, RESOURCE.CONHECIDO);

    return (
        <>    
        {conhecido && 
            <ResourceContainer title={conhecido.nome}>
                <S.ActionContainer>
                    <Button
                        variant='outline'
                        onClick={() => handleChangeRoute(ROUTE.CONHECIDO)}
                        color="violet">
                        Voltar
                    </Button>
                </S.ActionContainer>
                <S.Container>
                    <S.Avatar size={300}>

                    </S.Avatar>
                    <S.Detalhes>
                        <Detalhe label="Id" value={conhecido.id} />
                        <Detalhe label="Nome" value={conhecido.nome} />
                        <Detalhe label="Nickname" value={conhecido.nickname} />
                        <Detalhe label="Rota Main" value={conhecido.rotaMain.nome} />
                        <Detalhe label="Discord" value={conhecido.discord} />
                        <Detalhe label="Whatsapp" value={conhecido.whatsapp} />
                    </S.Detalhes>
                </S.Container>

            </ResourceContainer> }
        </>
    );
}

export function ConvidadoDetalhes({ id, handleChangeRoute }: { id: number, handleChangeRoute: RouteHandler }) {
    const { resource: convidado, loading } = useResourceDetails<Convidado>(id, RESOURCE.CONVIDADO);

    return (
        <>    
        {convidado && 

            <ResourceContainer title={convidado.nickname}>
                <S.ActionContainer>
                    <Button
                        variant='outline'
                        onClick={() => handleChangeRoute(ROUTE.CONVIDADO)}
                        color="violet">
                        Voltar
                    </Button>
                </S.ActionContainer>

                <S.Container>
                    <S.Avatar size={300}>

                    </S.Avatar>
                    <S.Detalhes>
                        <Detalhe label="Id" value={convidado.id} />
                        <Detalhe label="Nickname" value={convidado.nickname} />
                        <Detalhe label="Rota Main" value={convidado.rotaMain.nome} />
                        <Detalhe label="Rank Solo/Duo" value={convidado.rankSolo} />
                        <Detalhe label="Contato" value={convidado.origemContato} />
                    </S.Detalhes>
                </S.Container>

            </ResourceContainer> }
        </>
    );
}

function Detalhe({ label, value }: { label: string, value: any }) {
    return (
        <S.DetalheContainer>
            <S.DetalheLabel>
                {label}:
            </S.DetalheLabel>
            <S.DetalheValue>
                {value}
            </S.DetalheValue>
        </S.DetalheContainer>
    );
}