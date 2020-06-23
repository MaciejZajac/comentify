import React from 'react';
import styled from 'styled-components';

const FooterCom = styled.footer`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 30px 15px;
`;
export default function Footer(theme) {
    return (
        <>
            <FooterCom>Maciej Zając {new Date().getFullYear()}</FooterCom>
        </>
    );
}
