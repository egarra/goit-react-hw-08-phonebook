import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
     color: white;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 20px;
    text-decoration: none;

    &.active {
        color: rgba(0,0,0,0.8);
        background: white;
        border-radius: 5px;
        padding: 5px 20px;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: rgba(0,0,0,0.8);
        background: white;
    }
`
export const NavWrapper = styled.div`
    display: flex;
    gap: 10px;
`