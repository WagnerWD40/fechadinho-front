import { Equipe } from '../../models';

import * as S from './styles';

function Objetivos({ equipe }: { equipe?: Equipe }){
    return (
        <S.Container>
            <Objetivo label='B' value={equipe?.barao} />
            <Objetivo label='D' value={equipe?.barao} />
            <Objetivo label='H' value={equipe?.barao} />
            <Objetivo label='V' value={equipe?.barao} />
            <Objetivo label='T' value={equipe?.barao} />
            <Objetivo label='I' value={equipe?.barao} />
        </S.Container>
    );
}   

function Objetivo({ label, value }: { label: string, value?: number }) {
    return (
        <S.ObjetivoContainer>
            <S.Label>
                {label}:
            </S.Label>
            <S.Value>
                {value ?? 0}
            </S.Value>
        </S.ObjetivoContainer>
    );
}

export default Objetivos