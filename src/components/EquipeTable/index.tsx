import { TEAM } from "../../constants";
import { Campeao, Equipe } from "../../models";

import Top from '../../assets/Top.webp';
import Jungle from '../../assets/Jungle.webp';
import Mid from '../../assets/Mid.webp';
import ADC from '../../assets/ADC.webp';
import Suporte from '../../assets/Suporte.webp';

import * as S from './styles';

const rotaIconst: Record<string, any> = {
    Top,
    Jungle,
    Mid,
    ADC,
    Suporte,
} as const;

function EquipeTable({ equipe }: { equipe?: Equipe }) {
    return (
        <S.Container teamcolor={equipe?.side as TEAM}>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Campeao</th>
                        <th>Jogador</th>
                        <th>Rota</th>
                        <th>K</th>
                        <th>D</th>
                        <th>A</th>
                        <th>Dano causado</th>
                        <th>Dano recebido</th>
                        <th>CS</th>
                    </tr>
                </thead>
                <tbody>
                    {equipe?.picks.map(pick =>
                        <tr>
                            {/* <td><ChampionIcon campeao={pick.campeao} /></td> */}
                            <td>{pick.campeao.nome}</td>
                            <td>{pick.jogador.nickname}</td>
                            {/* <td>{pick.rota.nome}</td> */}
                            <td>
                                <S.RouteIconContainer>
                                    <img src={rotaIconst[pick.rota.nome]} width="20px"/>
                                </S.RouteIconContainer>
                            </td>
                            <td>{pick.abates}</td>
                            <td>{pick.mortes}</td>
                            <td>{pick.assistencias}</td>
                            <td>{pick.danoCausado}</td>
                            <td>{pick.danoRecebido}</td>
                            <td>{pick.cs}</td>
                        </tr>)}
                </tbody>
            </table>
        </S.Container>
    );
}

function ChampionIcon({ campeao }: { campeao: Campeao }) {
    const baseUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/';
    return <S.Icon src={`${baseUrl}${campeao.idRiot}.png`} />
}

export default EquipeTable;