import styled from "styled-components";
import { Button } from "../Button/Button";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 550px;
  min-height: 550px;
  /* background-color: rgba(255, 255, 255, 0.8); */
  background-color: #fff;
  padding: 50px;
  border-radius: 20px;
`;

export const Text = styled.p`
  font-size: 1.2rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;
`;

export const Title = styled.h2``;

export const BtnEdit = styled(Button)`
  width: 200px;
`

export const BtnCancel = styled(BtnEdit)`
  background-color:rgb(201, 5, 5);

  &:hover {
    background-color:rgb(163, 0, 0);
  }
`
