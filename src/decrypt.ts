import { fromBase64, generateKey } from "./utils/utils";

export type DecryptParams = {
    encryptedData: string;
    password: string;
    initializationVector: string;
    salt: string;
};

export async function decrypt({
    encryptedData,
    password,
    initializationVector,
    salt,
  }: DecryptParams): Promise<string> {
    const iv = fromBase64(initializationVector);
    const saltBytes = fromBase64(salt);
    const encryptedBytes = fromBase64(encryptedData);
    const key = await generateKey({password: password, salt:saltBytes});
  
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      encryptedBytes
    );
  
    return new TextDecoder().decode(decryptedBuffer);
  }