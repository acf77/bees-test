import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  box-sizing: border-box;
  height: 282px;
  width: 382px;
  margin: 15px;
  float: left;
  padding: 23px;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  width: 25ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Address = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #3f3f46;
  width: 30ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const YellowToastContainer = styled.div`
  display: flex;
`;

export const YellowToast = styled.div`
  background-color: #f2ec54;
  border-radius: 99px;
  border: black;
  height: 32px;
  width: 130px;
  margin: 10px;
`;

export const YellowToastText = styled.p`
  text-align: center;
  font-size: 14px;
  margin: 5px;
`;
