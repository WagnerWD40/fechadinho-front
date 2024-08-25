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
    background-color: transparent;
    border-radius: 900px;
    border: 1px solid var(--mantine-color-violet-outline);
    width: 28px;
    height: 28px;
    color: var(--mantine-color-violet-outline);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;