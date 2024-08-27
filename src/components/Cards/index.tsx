import { TEAM } from '../../constants';
import { Campeao, Conhecido, Convidado, Partida } from '../../models';
import ChampionIcon from '../ChampionIcon';
import EquipeTable from '../EquipeTable';
import Objetivos from '../Objetivos';

import * as S from './styled';

export function CardCampeao({ campeao, handleClick }: { campeao: Campeao, handleClick: () => void }) {
    return (
        <S.CardAvatar onClick={handleClick}>
            <S.Avatar>
                <ChampionIcon campeao={campeao} size={60}/>
            </S.Avatar>
            <S.NameContainer>{campeao.nome}</S.NameContainer>
        </S.CardAvatar>
    );
}

export function CardConhecido({ conhecido, handleClick }: { conhecido: Conhecido, handleClick: () => void }) {
    return (
        <S.CardAvatar onClick={handleClick}>
            <S.Avatar></S.Avatar>
            <S.NameContainer>{conhecido.nickname}</S.NameContainer>
        </S.CardAvatar>
    );
}

export function CardConvidado({ convidado, handleClick }: { convidado: Convidado, handleClick: () => void }) {
    return (
        <S.CardAvatar onClick={handleClick}>
            <S.Avatar></S.Avatar>
            <S.NameContainer>{convidado.nickname}</S.NameContainer>
        </S.CardAvatar>
    );
}

export function CardPartida({ partida }: { partida: Partida }) {

    const {
        data,
        duracao,
        vitoriaTimeAzul,
        equipes,
    } = partida;

    const blueTeam = equipes.find(p => p.side === TEAM.BLUE);
    const redTeam = equipes.find(p => p.side === TEAM.RED);

    return (
        <S.Card>
            <S.PartidaHeader>
                <S.Timestamp>data: <span>{data}</span> duração: <span>{duracao}</span></S.Timestamp>
                <S.VitoriaIndicator vitoriaTimeAzul={vitoriaTimeAzul} >Vitória</S.VitoriaIndicator>
            </S.PartidaHeader>
            <S.TeamContainer>
                <EquipeTable equipe={blueTeam} vitoria={vitoriaTimeAzul} />
                <S.Separador>
                    <Objetivos equipe={blueTeam} />
                    <Objetivos equipe={redTeam} />
                </S.Separador>
                <EquipeTable equipe={redTeam} vitoria={!vitoriaTimeAzul} />
            </S.TeamContainer>
        </S.Card>
    );
}