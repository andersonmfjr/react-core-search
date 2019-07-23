import styled from 'styled-components';

export const Image = styled.img`
  width: ${props => props.width};
  margin: ${props =>
    `${props.marginTop} ${props.marginRight} ${props.marginBottom} ${props.marginLeft}`};
  cursor: ${props => (props.hasLink ? 'pointer' : 'normal')};
`;
