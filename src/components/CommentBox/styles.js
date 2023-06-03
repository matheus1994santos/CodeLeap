import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 0px;

    textarea{
        resize: none;
        margin-bottom: 1rem;
        border: 0.6px solid #ccc;
        border-radius: 6px;
        min-height: 80px;
        outline: inherit;
        padding: 8px;
    }
`;