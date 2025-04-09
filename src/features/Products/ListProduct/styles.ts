import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

export const Card = styled.div`
  background-color: red;
  margin-top: 100px;
  height: 400px;
  width: 400px;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`;
