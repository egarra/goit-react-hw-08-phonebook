import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding-top: 30px;
`

export const Input = styled.input`
    padding: 10px 50px;
    border-radius: 5px;

    transition-property: scale;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    
    :hover,
    :focus {
        /* border: 5px solid white; */
        outline: none;
        scale: 1.1;
    }

`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    color: white;
`

export const Btn = styled.button`
    padding: 10px 112px;
    border: 2px solid white;
    border-radius: 5px;
    margin-top: 20px;
    font-family: 'Ubuntu', sans-serif;

    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`