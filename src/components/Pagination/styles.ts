import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
  height: 30px;
  width: 800px;
  background-color: #fff;
  border: 1px solid #000;
`;

export const Text = styled.p`
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
`;

export const BtnPag = styled.button`
  color: #fff;
  border: none;
  background-color: #1e90ff;
  width: 40px;
  cursor: pointer;
`;

export const Select = styled.select`
  font-size: 0.8rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  border: none;
  background-color: #1e90ff;
  width: 40px;
`;
