import styled from "styled-components";

export const Button = styled.button`
  background-color: oklch(62.3% 0.214 259.815);
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  margin-top: 20px;
  height: 35px;
  width: 300px;
  font-size: 1.2em;
  border: none;
  border-radius: 2px;

  &:hover {
    transition: 1s;
    background-color: oklch(54.6% 0.245 262.881);
  }
`;
