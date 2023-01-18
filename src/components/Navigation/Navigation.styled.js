import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
     color: rgb(27 180 139);
    border-radius: 5px;
    padding: 5px 20px;
    font-size: 20px;
    text-decoration: none;

    &.active {
        color: white;
        background: rgb(27 180 139);
        border-radius: 5px;
        padding: 5px 20px;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: white;
        background: rgb(27 180 139);
    }
`