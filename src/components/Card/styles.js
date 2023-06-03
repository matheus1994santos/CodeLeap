import styled from "styled-components";

export const StyledCard = styled.div`
    max-width: 752px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #999999;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    section{
        padding: 0 14px;
    }
`;

export const StyledUser = styled.p`
    padding: 0 22px;
    padding-top: 10px;
    font-size: 15px;
    font-weight: bold;
    color: #777777;
`;

export const StyledText = styled.div`
    padding: 0 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    p{
        padding: 0 8px;
        font-size: 18px;
        color: #000000;
    }
`;

export const StyledBar = styled.nav(({variant}) => ({
    padding: '8px 14px',
    paddingTop: 12,
    display: 'flex',
    justifyContent: 'space-between',
    ...( variant === 'get' && {
    }),
    ...( variant === 'post' && {
        backgroundColor: '#7695EC',
        color: 'white',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        fontSize: 18
    }),
}))

export const StyledContentButton = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 0 12px;
`;

export const StyledContentIcon = styled.div`
    display: flex;
    gap: 8px;
`;