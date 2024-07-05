import styled from "styled-components";

const Button = styled.button.attrs(({ size }) => ({
  size: size || "md", // Mantenemos solo el atributo 'size'
}))`
  padding: 15px;
  font-size: 20px;
  border-radius: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: black;
  }
`;

export default Button;
