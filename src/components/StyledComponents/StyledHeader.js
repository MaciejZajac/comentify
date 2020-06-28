import styled from 'styled-components';

export const StyledHeader = styled.h1`
    font-size: ${(props) => (props.small ? '16px' : '22px')};
    padding: 8px;
    font-weight: 700;
`;
