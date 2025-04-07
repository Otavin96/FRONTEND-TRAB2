export type ClientType = {
  id?: string;
  cnpj: string;
  social_reason: string;
  email: string;
  password: string;
  phone: string;
  created_at?: string;
  updated_at?: string;
};

export type AuthType = {
  email: string;
  password: string;
};
