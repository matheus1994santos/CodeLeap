import styled from "styled-components";

export const StyledPageModal = styled.section`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({blur}) => blur ? `rgba(119, 119, 119,${blur})` : `#DDDDDD`};
    z-index: 1;
`;