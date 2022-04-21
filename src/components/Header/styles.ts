import styled from "styled-components";

export const Header = styled.div`
  /* display: flex; */
  font-weight: 400;
  font-size: 30px;
  overflow: hidden;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const BackArrow = styled.p`
  margin: 0;
  float: left;
  padding: 15px;
`;

export const Username = styled.a`
  float: right;
  text-align: center;
  padding: 15px;
  text-decoration: none;

  @media (max-width: 800px) {
    margin-top: 15px;
  }
`;
