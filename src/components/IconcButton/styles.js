import styled from "styled-components";

export const StyledContainer = styled.button`
    display: flex;
    padding: 0 4px;
    cursor: pointer;
    border: none;
    outline: inherit;
    background-color: inherit;
    color: white;
    & :hover{
        background-color: rgba(109, 109, 109, 0.6);  
    }
`;