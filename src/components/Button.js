import styled from 'styled-components';

export const RandomButton = styled.button`
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 8px 15px;
  color: var(--bg-grey);
  background: var(--primary);
  border: none;
  cursor: pointer;
  transition: 0.3s ease-out;
  &:hover {
    opacity: 0.5;
  }
`;
