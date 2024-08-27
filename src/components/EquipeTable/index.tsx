import { TEAM } from "../../constants";
import { Equipe } from "../../models";

import Top from '../../assets/Top.webp';
import Jungle from '../../assets/Jungle.webp';
import Mid from '../../assets/Mid.webp';
import ADC from '../../assets/ADC.webp';
import Suporte from '../../assets/Suporte.webp';

import { Utils } from "../../utils";

import * as S from './styles';
import ChampionIcon from "../ChampionIcon";

const rotaIconst: Record<string, any> = {
    Top,
    Jungle,
    Mid,
    ADC,
    Suporte,
} as const;

function EquipeTable({ equipe, vitoria }: { equipe?: Equipe, vitoria: boolean }) {

    
    return (
        <S.Container teamcolor={equipe?.side as TEAM}>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Campeao</th>
                        <th>Jogador</th>
                        <th>Rota</th>
                        <th>KDA</th>
                        <th>Dano causado</th>
                        <th>Dano recebido</th>
                        <th>Gold</th>
                        <th>CS</th>
                    </tr>
                </thead>
                <tbody>
                    {equipe?.picks.map(pick =>
                        <tr>
                            <td><ChampionIcon campeao={pick.campeao} /></td>
                            {/* <td>{pick.campeao.nome}</td> */}
                            <td>{pick.jogador.nickname}</td>
                            <td>
                                <S.RouteIconContainer>
                                    <img src={rotaIconst[pick.rota.nome]} width="20px"/>
                                </S.RouteIconContainer>
                            </td>
                            <td>{`${pick.abates} / ${pick.mortes} / ${pick.assistencias}`}</td>
                            <td>{Utils.formatNumber(pick.danoCausado)}</td>
                            <td>{Utils.formatNumber(pick.danoRecebido)}</td>
                            <td>{Utils.formatNumber(pick.gold)}</td>
                            <td>{pick.cs}</td>
                        </tr>)}
                </tbody>
            </table>
        </S.Container>
    );
}

export default EquipeTable;