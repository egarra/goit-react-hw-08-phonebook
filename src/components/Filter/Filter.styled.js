import styled from 'styled-components';

export const InputField = styled.input `
display: block ;
    padding: 10px 20px;
    width: 324px;
    border: 2px solid white;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 20px;


 transition-property: scale;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    
    :hover,
    :focus {
        outline: none;
        scale: 1.1;
    }
`
export const Text = styled.p`
    color: white;
    text-align: center;
`