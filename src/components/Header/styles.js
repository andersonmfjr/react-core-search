import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #063b74;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 10px 0 10px 0;
  }
`;
