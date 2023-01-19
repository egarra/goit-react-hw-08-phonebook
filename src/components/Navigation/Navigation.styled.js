import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
     color: white;
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 20px;
    text-decoration: none;

    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
        color: rgba(0,0,0,1);
        background: white;
        border-radius: 5px;
        padding: 5px 20px;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: rgba(0,0,0,1);
        background: white;
    }
`