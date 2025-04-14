import styled from "styled-components";

export const QueryContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 800px;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
`;

export const QueryInput = styled.input`
  margin-left: 20px;
  font-size: 1.1rem;
  padding-left: 5px;
  &::placeholder {
  }
`;

export const Order = styled.div``;

export const SelectQuery = styled.select`
  font-size: 1rem;
  text-align: center;
  height: 100%;
`;
