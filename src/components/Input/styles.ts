import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.8;
  margin-bottom: 0.2rem;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  background-color: rgba(235, 235, 235, 0.42);
  height: 35px;
  padding: 5px;
  width: 350px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: 2px solid oklch(62.3% 0.214 259.815);
  }

  &::placeholder {
    padding-left: 5px;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      outline: 2px solid rgba(218, 28, 28, 0.81);
    `}
`;

export const HelperText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
