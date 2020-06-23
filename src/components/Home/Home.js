import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

const StyledHeader = styled.h1`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    padding: 80px 20px;
`;

const StyledButton = styled(Link)`
    background: linear-gradient(150deg, #0b4f6c, #0b4f6ca1);
    color: #fff;
    padding: 20px;
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 20px;

    border-radius: 15px;
    border: none;

    cursor: pointer;
    text-decoration: none;
`;

export default function Home() {
    return (
        <StyledHome>
            <StyledHeader>
                Leave your opinion being sure it will not be censored
            </StyledHeader>
            <StyledButton to='/login'>Write your opinion</StyledButton>
        </StyledHome>
    );
}
