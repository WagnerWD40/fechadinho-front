import * as S from './styled';

interface Props {
    children?: React.ReactNode
}

function Main({ children }: Props) {
    return (
        <S.Background>
            {children}
        </S.Background>
    )
}

export default Main;