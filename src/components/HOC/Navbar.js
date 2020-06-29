import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Toggle from '../Toggle/Toggle';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
`;

const Menu = styled.ul`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    padding: 5px 15px;
    margin: 0 10px;
    font-weight: 700;
    opacity: 0.8;
    color: inherit;
    text-decoration: none;
    transition: color 0.25s linear;

    &:hover {
        opacity: 1;
        color: #0b4f6c;
    }
`;

const StyledLogo = styled(Link)`
    padding: 5px 15px;
    margin: 0 10px;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.25s linear;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: #0b4f6c;
    }
`;

export default function Navbar({ theme, toggleTheme }) {
    return (
        <Nav>
            <StyledLogo to='/'>Commentify</StyledLogo>
            <>
                <Menu>
                    <StyledLink to='/your-opinion'>Write</StyledLink>
                    {/* <StyledLink to='/login'>Log in</StyledLink>
                    <StyledLink to='/signin'>Register</StyledLink> */}
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                </Menu>
            </>
        </Nav>
    );
}
