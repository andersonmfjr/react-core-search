import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: ${props => props.width};
  box-sizing: border-box;
  padding: 20px;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #063b74;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  color: #fff;
  background-color: #063b74;
  border: none;
  outline: none;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #063b7499;
  }
`;
