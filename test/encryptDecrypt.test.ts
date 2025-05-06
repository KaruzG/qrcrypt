import { expect, test } from 'vitest'
import { encrypt } from "../src/encrypt"
import { decrypt } from "../src/decrypt"

test("GenerateKey, Encrypt, Decrypt ", async function() {
    const encryptedText = await encrypt({data: "test", password: "test"});
    const { initializationVector, salt, encryptedData } = encryptedText;
    const decryptedData = await decrypt({
        encryptedData,
        initializationVector,
        salt,
        password: "test"
    });
    expect(decryptedData).toBe("test")
})