import {toBase64, generateKey} from "./utils/utils"
import { subtle, getRandomValues } from "uncrypto";



type encryptParams = {
    data: string,
    password: string,
}

type encryptReturn = {
    initializationVector: string,
    salt: string,
    encryptedData: string
}

export async function encrypt(params: encryptParams):Promise<encryptReturn> {
    const {data, password} = params
    const encodedData = new TextEncoder().encode(data)
    const initializationVector = getRandomValues(new Uint8Array(12))
    const salt = getRandomValues(new Uint8Array(16))
    const key = await generateKey({password: password, salt: salt})

    const encryptedData = await subtle.encrypt ({
        name: "AES-GCM",
        iv: initializationVector
    },key, encodedData)
    return {
        initializationVector: toBase64(initializationVector),
        salt: toBase64(salt),
        encryptedData: toBase64(encryptedData)
    }
}