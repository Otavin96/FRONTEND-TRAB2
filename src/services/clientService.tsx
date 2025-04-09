import { AuthType, ClientType } from "../features/Clients/types/ClientType";
import api from "./api";

export const createClient = async (client: ClientType) => {
  const response = await api.post("/client/", client);
  console.log(response.status);
  return response.data;
};

export const authenticateClient = async (data: AuthType) => {
  const response = await api.post("client/authentication/", data);
  console.log(response.data);
  return response.data;
};
