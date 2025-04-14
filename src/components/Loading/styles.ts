import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  position: relative;
  top: 30%;
  animation: ${rotate} 2s linear infinite;
  font-size: 1.2rem;
`;
