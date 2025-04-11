import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  height: 100vh;
  width: 100%;
`;

export const Table = styled.table`
  margin-top: 50px;
  height: 100px;
  width: 600px;
  border: 1px solid #000;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: cornflowerblue;
`;

export const Tbody = styled.tbody`
  background-color: #fff;
`;

export const Tr = styled.tr`
  border: 1px solid black;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid black;
  color: white;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid black;
`;
