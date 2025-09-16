import {
  type AvitoGetBalanceResponse,
  type AvitoGetProfileResponse,
  type AvitoTokenParams,
  BACKEND_PORT,
} from "@/shared";

export const getAvitoToken = async () => {
  try {
    const res = await fetch(`${BACKEND_PORT}/api/avito/get_token`, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
      credentials: "include",
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getAvitoBalance = async ({
  avito_token,
}: AvitoTokenParams): Promise<AvitoGetBalanceResponse | null> => {
  try {
    const res = await fetch(`${BACKEND_PORT}/api/avito/get_balance`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        avito_token,
      }),
    })
      .then((res) => res.json())
      .catch(() => {
        console.warn("error");
      });

    return res || null;
  } catch (e) {
    console.log(e);
  }
};

export const getAvitoProfile = async ({
  avito_token,
}: AvitoTokenParams): Promise<AvitoGetProfileResponse | null> => {
  try {
    const res = await fetch(`${BACKEND_PORT}/api/avito/get_user_profile`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        avito_token,
      }),
    })
      .then((res) => res.json())
      .catch(() => {
        console.warn("error");
      });

    return res || null;
  } catch (e) {
    console.log(e);
  }
};
