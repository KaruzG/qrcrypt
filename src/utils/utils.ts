export function toBase64(buffer: ArrayBuffer): string {
    return Buffer.from(buffer).toString("base64");
}
  
export function fromBase64(base64: string): Uint8Array {
    return new Uint8Array(Buffer.from(base64, "base64"));
}
 
export type generateKeyParams = {
    password: string,
    salt: Uint8Array,
}

export async function generateKey(params:generateKeyParams):Promise<CryptoKey> {
  const {password, salt} = params
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100_000,
      hash: "SHA-256",
    },
    keyMaterial,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"]
  );

  return key;
}