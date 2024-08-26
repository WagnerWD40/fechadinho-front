import styled from "styled-components";

export const Icon = styled.img<{ size: number }>`
    width: ${p => `${p.size}px`};
    height: ${p => `${p.size}px`};
    border-radius: 500px;
    border: 2px solid #fff;
`;
