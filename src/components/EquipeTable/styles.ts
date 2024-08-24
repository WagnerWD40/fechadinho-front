import styled from "styled-components";
import { TEAM } from "../../constants";

interface Props {
    teamcolor?: TEAM;
}

const blue = '#0066fe';
const lightBlue = '#00b8ff1f';
const lightRed = '#ff000026';
const red = '#fe2f00eb';

export const Container = styled.div<Props>`
    border: 3px solid ${p => p.teamcolor === TEAM.BLUE ? blue : red};
    border-radius: 6px;
    background-color: #fff;

    &:first-child {
        margin: 8px 8px 0 8px;
        border-radius: 6px 6px 0 0;
    }

    &:last-child {
        margin: 0 8px 8px 8px;
        border-radius: 0 0 6px 6px;
    }

    & table {
        
    }

    & thead {
        background-color: ${p => p.teamcolor === TEAM.BLUE ? lightBlue : lightRed};
    }

    & tr {
        height: 40px;
        border-bottom: 1px solid #eeeeee99;
        transition: background 0.3s ease-in-out;
    }

    & tbody > tr:hover {
        background-color: #eeeeee99;
    }

    & td, & th {
        text-align: center;
        vertical-align: middle;
    }
`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 500px;
`;

export const RouteIconContainer = styled.div`
    background-color: #212738;
    width: 32px;
    height: 32px;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`;