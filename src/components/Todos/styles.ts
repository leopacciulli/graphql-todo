import styled from 'styled-components';

export const Loading = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 24px;
`;

export const Error = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 24px;
  color: red;
`;

export const Empty = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 24px;
  color: '#333';
`;

export const Todo = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  justify-content: space-between;
  border-radius: 12px;
  margin: 16px 0px;
  padding: 16px;
`;

export const Left = styled.div`
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const User = styled.div`
  font-size: 16px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
`;
