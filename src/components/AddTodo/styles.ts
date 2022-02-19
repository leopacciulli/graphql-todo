import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-gap: 8px;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  padding: 0 4px;
`;

export const Button = styled.button`
  background: #1d9bf0;
  border-radius: 8px;
  padding: 0 16px;
  border: none;
  color: #fff;
  height: 40px;
`;
