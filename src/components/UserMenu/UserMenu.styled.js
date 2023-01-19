import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
    /* align-items: baseline; */
`

export const Btn = styled.button`
    padding: 5px 20px;
    border: 2px solid white;
    border-radius: 5px;
    font-family: "SF Pro Display", sans-serif;
    font-size: 20px;

    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    font-family: 'Ubuntu', sans-serif;

    :hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`