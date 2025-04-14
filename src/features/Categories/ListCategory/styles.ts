import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Table = styled.table`
  margin-top: 20px;
  height: 100px;
  width: 800px;
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
  text-align: center;
  padding: 10px;
  text-align: left;
  border: 1px solid black;
  color: white;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid black;
`;

export const Action = styled.div`
  display: flex;
  gap: 10px;
`;

export const Btn = styled.button`
  background-color: #1e90ff;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  color: aliceblue;
  font-weight: 700;
`;

export const BtnDel = styled(Btn)`
  background-color: red;
`;
