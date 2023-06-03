import styled from "styled-components";

export const StyledButton = styled.button(({variant, font = 12}) => ({
    padding: '4px 20px',
    borderRadius: 6,
    border: 'none',
    cursor: 'pointer',
    outline: 'inherit',
    fontSize: font,
    ...( variant === 'text' && {
        backgroundColor: 'inherit',
    }),
    ...( variant === 'contained' && {
        backgroundColor: '#7695EC',
        outline: 'inherit',
        color: '#fff'
    }),
    ...( variant === 'outline' && {
        backgroundColor: 'inherit',
        border: '1px solid #999999',
        color: '#000'
    }),
    ...( variant === 'delete' && {
        backgroundColor: '#FF5151',
        color: '#fff'
    }),
    ...( variant === 'edit' && {
        backgroundColor: '#47B960',
        color: '#fff'
    }),
}))