import styled from "styled-components";

export const Card = styled.div`
    background-color: var(--mantine-color-violet-filled);
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 4px 4px 2px #00000011;

    margin-top: 16px;
    min-height: 60px;
`;

export const CardAvatar = styled.div`
    //background-color: #FFF; 
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const TeamContainer = styled.div`
    background-color: #212738;
    border-radius: 6px;
    margin-top: 8px;
    padding: 4px;

`;

export const PlayersContainer = styled.table`
    background-color: aquamarine;
`;

export const Separador = styled.div`
    height: 60px;
    background-color: #FFF;
    margin: 0 8px;
    display: flex;
    justify-content: space-between;
`;

export const Avatar = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 100px;
    margin-bottom: 8px;
    background-color: #242038;
`;

export const NameContainer = styled.div`
    text-align: center;
`;

export const PartidaHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
`;

export const VitoriaIndicator = styled.div<{ vitoriaTimeAzul: boolean }>`
    padding: 8px 24px;
    border-radius: 50px;
    
    background-color: ${p => p.vitoriaTimeAzul ? 'var(--blue)' : 'var(--red)'};
    color: #FFF;
    box-shadow: 2px 2px 2px #00000033;
`;

export const Timestamp = styled.div`
    background-color: #FFF;
    width: fit-content;
    padding: 8px;
    border-radius: 50px;
    color: #787878;
    font-weight: bold;
    font-size: 12px;

    & span {
        font-size: 14px;
        color: #444;
    }

    & span:first-of-type::after {
        content: "";
        border-right: 2px solid #44444433;
        margin: 16px;
    }
`;