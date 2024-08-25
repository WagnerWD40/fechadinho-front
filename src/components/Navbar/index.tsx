import { Button } from '@mantine/core';
import * as S from './styled';
import { ROUTE } from '../../App';

interface NavbarProps {
    campeaoQtd?: number;
    conhecidoQtd?: number;
    convidadoQtd?: number;
    partidaQtd?: number;
    handleChangeRoute: (route: ROUTE) => void,
}

function Navbar({ campeaoQtd, conhecidoQtd, convidadoQtd, partidaQtd, handleChangeRoute }: NavbarProps) {
    return (
        <S.Navbar>
            <Button
                variant='outline'
                rightSection={<ButtonValue value={partidaQtd} />}
                onClick={() => handleChangeRoute(ROUTE.PARTIDA)}
                color="violet">
                Partidas
            </Button>            
            <Button
                variant='outline'
                rightSection={<ButtonValue value={campeaoQtd} />}
                onClick={() => handleChangeRoute(ROUTE.CAMPEAO)}
                color="violet">
                Campeões
            </Button>
            <Button
                variant='outline'
                rightSection={<ButtonValue value={conhecidoQtd} />}
                onClick={() => handleChangeRoute(ROUTE.CONHECIDO)}
                color="violet">
                Conhecidos
            </Button>
            <Button
                variant='outline'
                rightSection={<ButtonValue value={convidadoQtd} />}
                onClick={() => handleChangeRoute(ROUTE.CONVIDADO)}
                color="violet">
                Convidados
            </Button>

        </S.Navbar>
    );
}

interface ButtonValueProps {
    value?: number;
}

function ButtonValue({ value }: ButtonValueProps) {
    return (
        <S.ValueContainer>
            {value ?? '?'}
        </S.ValueContainer>
    );
}

export default Navbar;