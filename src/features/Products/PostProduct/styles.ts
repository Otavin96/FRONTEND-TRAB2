import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  height: 100vh;
  width: 100%;
`;
export const PostProduct = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin-top: 100px;
  width: 600px;
  height: 550px;
  min-height: 550px;
`;
export const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  background-color: oklch(62.3% 0.214 259.815);
  padding: 5px;
  text-align: center;
  font-size: 1.6rem;
  border-bottom: 1px solid #000;
  width: 100%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
