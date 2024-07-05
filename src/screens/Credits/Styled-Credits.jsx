import styled from "styled-components";

export const CreditsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  color: #fff;
  text-align: center;
`;

export const CreditsText = styled.div`
  margin-bottom: 20px;
`;

export const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: #00ccbb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #009688;
  }
`;
