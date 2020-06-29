import React from 'react';
import { SingleOpinion } from './SingleOpinion';
import styled from 'styled-components';

const OpinionsContainer = styled.div`
    padding: 15px;
    margin: 10px 0;
`;

export function Opinions({ opinions }) {
    return (
        <OpinionsContainer>
            {opinions.map((item) => (
                <SingleOpinion key={item._id} data={item} />
            ))}
        </OpinionsContainer>
    );
}
