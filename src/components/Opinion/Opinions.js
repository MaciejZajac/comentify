import React from 'react';
import { SingleOpinion } from './SingleOpinion';
import styled from 'styled-components';

const opinionList = [
    {
        id: '1',
        author: 'Angela',
        date: 20,
        text: `People who force others into
         listening to the music by
          driving a car with windows wide opened
           and the volume 100% on - why do you do that?`,
    },
    {
        id: '2',
        author: 'Max',
        date: Date.now() - 100,
        text: `People who force others into
         listening to the music by
          driving a car with windows wide opened
           and the volume 100% on - why do you do that?`,
    },
];

const OpinionsContainer = styled.div`
    padding: 15px;
    margin: 10px 0;
`;

export function Opinions({ opinions }) {
    console.log('opinions', opinions);
    return (
        <OpinionsContainer>
            {opinions.map((item) => (
                <SingleOpinion key={item.id} data={item} />
            ))}
        </OpinionsContainer>
    );
}
