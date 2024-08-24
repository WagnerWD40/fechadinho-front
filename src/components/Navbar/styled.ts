import styled from "styled-components";

export const Navbar = styled.nav`
    background-color: #212738;
    padding: 16px;
    border-bottom: #7dcd85 2px solid;
    box-shadow: 4px 4px 2px #00000022;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    & > button:not(:last-of-type) {
        margin-right: 16px;
    }
`;

export const ValueContainer = styled.div`
    background-color: #FFF;
    border-radius: 900px;
    width: 24px;
    height: 24px;
    color: #212738;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;