import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: whitesmoke;
`;

export const Success = styled.div`
  min-height: 50px;
  width: 500px;
  background-color: oklch(54.6% 0.245 262.881);
`;

export const Register = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 620px;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.03);
  -webkit-box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.03);
  -moz-box-shadow: 0px 0px 17px 4px rgba(0, 0, 0, 0.03);
`;

export const Title = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 10px;
  font-weight: 600;
  color: white;
  text-align: center;
  font-size: 1.4rem;
`;

export const Info = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
`;
