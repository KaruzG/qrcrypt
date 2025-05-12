import QRCode from 'qrcode';
import { encrypt } from './encrypt';

type toQRparams = 
  | { password: string, encryptedFormat?: 'json' | 'web', authWebURL?: string, returnType: 'image' | 'text' | 'svg', data: string }
  | { password?: false, encryptedFormat?: undefined, authWebURL?: undefined, returnType: 'image' | 'text' | 'svg', data: string };

export async function toQR(params: toQRparams): Promise<string> {
  const { password = false, encryptedFormat = 'web', authWebURL = 'https://qrcrypt.vercel.app/authqr',returnType, data} = params;
  let qrData = data

  if(password) {
    const encryptedData = await encrypt({data: data, password: password})
    if(encryptedFormat === 'json') {
      qrData = `{salt}:"${encryptedData.salt}",{iv}:"${encryptedData.initializationVector}",{data}:"${encryptedData.encryptedData}"`
    } else
    if (encryptedFormat === 'web') {
      qrData = `${authWebURL}?salt=${encryptedData.salt}&iv=${encryptedData.initializationVector}&data=${encryptedData.encryptedData}"`
    }
  }

  if (returnType === 'svg') {
      const result = await QRCode.toString(qrData, { type: 'svg' });
      return result;
  }

  if (returnType === 'image') {
      const result = await QRCode.toDataURL(qrData);
      return result;
  }

  if (returnType === 'text') {
      const result = await QRCode.toString(qrData, { type: 'utf8' });
      return result;
  }

  throw new Error('Unsupported returnType or functionality not implemented');
}