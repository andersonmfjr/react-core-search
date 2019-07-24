import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  padding: 10px;
  margin-bottom: 25px;

  &:hover {
    background-color: #69696910;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #063b74;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  display: block;
  margin-top: 5px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Star = styled.p`
  font-weight: bold;
  margin: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-bottom: 15px;
  cursor: pointer;
`;

export const Type = styled.span`
  text-transform: capitalize;
`;

export const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`;

export const Info = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 15px;
`;
