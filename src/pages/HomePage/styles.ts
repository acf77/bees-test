import styled from "styled-components";

export const Background = styled.div`
  font-family: "Work Sans";
  font-weight: 400;
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  height: 43px;
  width: 300px;
  border: 1px solid #d4d4d8;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const Check = styled.input``;

export const Button = styled.button`
  background: #52525b;
  border-radius: 4px;
  color: #ffff;
  padding: 8px 16px;
  &:disabled {
    background-color: #f7f7f7;
    color: #52525b;
  }
`;

export const BeesLogo = styled.img`
  width: 278px;
  height: 278px;
`;
