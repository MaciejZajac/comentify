import React from 'react';
import styled from 'styled-components';

const NotFoundComp = styled.div`
    font-size: 60px;
    font-weight: 700;
    padding: 60px 30px 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;
const Paragraph = styled.p`
    font-size: 40px;
    font-weight: 700;
    padding: 40px 20px 80px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export default function NotFound() {
    return (
        <div>
            <NotFoundComp>404</NotFoundComp>
            <Paragraph>This page do not exist!</Paragraph>
        </div>
    );
}
