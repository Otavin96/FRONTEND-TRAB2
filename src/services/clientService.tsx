import { AuthType, ClientType } from "../features/Clients/types/ClientType";
import api from "./api";

export const createClient = async (client: ClientType) => {
  const response = await api.post("/client/", client);
  return response.data;
};

export const authenticateClient = async (data: AuthType) => {
  const response = await api.post("client/authentication/", data);
  return response.data;
};
