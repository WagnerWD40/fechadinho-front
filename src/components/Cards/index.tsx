import { TEAM } from '../../constants';
import { Campeao, Conhecido, Convidado, Partida } from '../../models';
import EquipeTable from '../EquipeTable';

import * as S from './styled';

export function CardCampeao({ campeao }: { campeao: Campeao }) {
    return (
        <S.CardAvatar>
            <S.Avatar></S.Avatar>
            <S.NameContainer>{campeao.nome}</S.NameContainer>
        </S.CardAvatar>
    );
}

export function CardConhecido({ conhecido }: { conhecido: Conhecido }) {
    return (
        <S.CardAvatar>
            <S.Avatar></S.Avatar>
            <S.NameContainer>{conhecido.nickname}</S.NameContainer>
        </S.CardAvatar>
    );
}

export function CardConvidado({ convidado }: { convidado: Convidado }) {
    return (
        <S.CardAvatar>
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
        <S.Card >
            <S.Timestamp>data: <span>{data}</span> duração: <span>{duracao}</span></S.Timestamp>
            <S.TeamContainer>
                <EquipeTable equipe={blueTeam} />
                <S.Separador></S.Separador>
                <EquipeTable equipe={redTeam} />
            </S.TeamContainer>
        </S.Card>
    );
}