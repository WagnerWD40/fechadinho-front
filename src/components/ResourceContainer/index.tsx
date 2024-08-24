import * as S from './styled';

interface ResourceContainerProps {
    title: string;
    children?: React.ReactNode
}

function ResourceContainer({ title, children }: ResourceContainerProps) {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            
            <>{children}</>
        </S.Container>
    );
}

export function ResourceContainerWrap({ title, children }: ResourceContainerProps) {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.ContainerWrap>{children}</S.ContainerWrap>
        </S.Container>
    );
}

export default ResourceContainer;