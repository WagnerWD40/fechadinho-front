import styled from "styled-components";

export const Card = styled.div`
    background-color: var(--mantine-color-violet-filled);
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