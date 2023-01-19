import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    height: 100vh;
    
`

export const List = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 5px;
    padding: 20px;
    list-style: none;
    margin-top: 20px;
    align-items: center;
    margin: 0 auto;
    /* background: radial-gradient(black, rgba(0, 0, 0, 0.8)); */
`

export const ListItem = styled.li `
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: white;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
`

export const Text = styled.p `
    font-size: 16px;
`
export const Btn = styled.button`
    padding: 10px 20px;
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


