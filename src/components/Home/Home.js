import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import { SingleOpinion } from '../Opinion/SingleOpinion';

const StyledHome = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const StyledHeader = styled.h1`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    padding: 80px 20px;
`;

const StyledLink = styled(Link)`
    font-size: 34px;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    transition: transform 0.25s linear;
    &:hover {
        transform: scale(1.05);
    }
`;

export default function Home() {
    return (
        <StyledHome>
            <StyledHeader>
                Leave your opinion being sure it will not be censored
            </StyledHeader>
            <StyledLink to='/login'>
                I want to write my opinion too!
                <ArrowRight size={60} />
            </StyledLink>
            <div>
                <StyledHeader small>Most recent opinions:</StyledHeader>
                <SingleOpinion />
            </div>
        </StyledHome>
    );
}
