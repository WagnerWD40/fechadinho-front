import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Avatar = styled.div<{ size: number }>`
    //background-color: #FFF; 
    width: ${p => `${p.size}px`};
    height: ${p => `${p.size}px`};
    border: 2px solid #fff;
    border-radius: 9000px;
    margin-bottom: 8px;
    background-color: #242038;
`;

export const Detalhes = styled.div`
    background-color: #FFF;
    min-width: 600px;
    padding: 24px;
    border-radius: 8px;
`;

export const DetalheContainer = styled.div`
    border-bottom: 2px solid #eaeaea77;
    display: flex;
    justify-content: space-between;
    &:not(:last-of-type) {
        margin-bottom: 16px;
    }
`;

export const DetalheLabel = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    margin-right: 300px;
`;

export const DetalheValue = styled.div`
    text-align: right;
    min-width: 200px;
`;

export const ActionContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 16px;
`;