import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Favorites = styled(Link)`
  text-align: center;
  font-size: 18px;
  color: #696969;
  text-decoration: none;
  margin-top: ${props => props.margintop};

  &:hover {
    color: #063b74;
  }
`;
