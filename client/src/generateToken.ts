import CryptoJS from "crypto-js";
export function generateAuthHeader(payload: any) {
  // This should match the server-side SECRET_KEY
  const SECRET_KEY = "KEfw-asdf-1234-5678-9012";

  const timestamp = Date.now().toString();
  const token = CryptoJS.HmacSHA256(
    JSON.stringify({
      ...payload,
      timestamp,
    }),
    SECRET_KEY
  ).toString();

  return {
    token,
    timestamp,
  };
}
