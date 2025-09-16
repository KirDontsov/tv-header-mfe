export interface AvitoTokenParams {
  avito_token: string;
}

export interface AvitoGetBalanceResponse {
  balance: number;
}

export interface AvitoGetProfileResponse {
  status: string;
  data: {
    id: number;
    name: string;
    email: string;
    phone: string;
    phones: string[];
    profile_url: string;
  };
}
