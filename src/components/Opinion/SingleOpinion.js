import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
const StyledArticle = styled.article`
    max-width: 600px;
    background-color: #f9f9f9;
    padding: 15px;
    line-height: 1.5;
    border-radius: 15px;
    margin-bottom: 20px;
`;
export function SingleOpinion({ data }) {
    const { nickName, text, date } = data;
    return (
        <StyledArticle>
            <h4>
                {nickName} {moment(date).calendar()} wrote:
            </h4>
            <div>
                <p>{text}</p>
            </div>
        </StyledArticle>
    );
}
