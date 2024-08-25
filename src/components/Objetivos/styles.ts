import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 60px;
    background-color: var(--red);
    width: 25%;
    flex-wrap: wrap;

    &:last-of-type {
        background-color: var(--blue);
    }
`;

export const ObjetivoContainer = styled.div`
    width: 33.33%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
`;

export const Label = styled.div`
    margin-right: 8px;
`;

export const Value = styled.div``;