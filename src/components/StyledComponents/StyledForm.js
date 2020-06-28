import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
`;

export const StyledInput = styled.input`
    border: 1px solid white;
    outline: none;

    padding: 10px;
    margin-bottom: 8px;
    ${({ error }) =>
        error &&
        `
    border-color: red;
    box-shadow: 0 0 2px red;
`};
    transition: all 0.25s linear;
`;
