import QRCode from 'qrcode';
import { encrypt } from './encrypt';

type toQRparams = {
  password?: string | false;
  returnType: 'image' | 'text' | 'svg';
  data: string;
};

export async function toQR(params: toQRparams): Promise<string> {
  const { password = false, returnType, data} = params;
  let qrData = data

  if(password) {
    const encryptedData = await encrypt({data: data, password: password})
    qrData = encryptedData.salt + encryptedData.initializationVector + encryptedData.encryptedData
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