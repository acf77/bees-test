import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffef0;
  width: 100%;
  height: 100%;
  padding: 15px;
  float: left;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 5px;
  }
`;

export const ShowMoreButton = styled.button`
  height: 32px;
  width: 130px;
  margin: 10px;
  left: 45%;
  position: sticky;
  bottom: 1%;
  background: #52525b;
  border-radius: 4px;
  color: #ffff;
  padding: 8px 16px;

  @media (max-width: 800px) {
    left: 30%;
    bottom: 3%;
    height: 40px;
    width: 150px;
  }
`;
