import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  cursor: pointer;

  background: ${palette.black};
  &:hover {
    background: ${palette.gray[9]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
