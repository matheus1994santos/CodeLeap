import styled from "styled-components";

export const StyledInput = styled.input(({variant, typeInput}) => ({
    marginTop: 4,
    ...((typeInput === 'text') && {
        ...(variant === 'text' && {
            borderRadius: 6,
            padding: '6px 12px',
            outline: 'inherit',
            border: '0.6px solid #ccc',
        }),
    }),
    ...((typeInput === 'submit') && {
        fontSize: '14px',
        marginTop: '12px',
        padding: '4px 16px',
        fontWeight: 'bold',
        borderRadius: 4,
        outline: 'inherit',
        border: 'none',
        color: '#fff',
        backgroundColor: '#7695EC',
        cursor: "pointer",
    }),


}))