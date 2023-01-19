import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
`

export const Btn = styled.button`
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 5px;
    margin-top: 20px;
    font-family: "SF Pro Display", sans-serif;

    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`