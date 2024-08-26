import { Campeao } from '../../models';
import { champIconBaseUrl } from '../../constants';

import * as S from './styles';

function ChampionIcon({ campeao, size = 32 }: { campeao: Campeao, size?: number }) {
    return <S.Icon size={size} src={`${champIconBaseUrl}${campeao.idRiot}.png`} />
}

export default ChampionIcon;