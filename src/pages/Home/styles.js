import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
`;

export const Favorites = styled(Link)`
  text-align: center;
  width: 100%;
  font-size: 18px;
  color: #696969;
  text-decoration: none;
  margin-top: 15px;

  &:hover {
    color: #063b74;
  }
`;
