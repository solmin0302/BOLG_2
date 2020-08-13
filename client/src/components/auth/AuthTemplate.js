import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${palette.gray[2]};
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 2px;
    font-weight: bold;
  }
  width: 360px;
  box-shadow: 0, 0, 8px, rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: ${palette.white};
  padding: 2rem;
`;
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">Reacters</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
