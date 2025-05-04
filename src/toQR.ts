import QRCode from 'qrcode';

type toQRparams = {
  encrypt: boolean;
  returnType: 'image' | 'text' | 'svg';
  data: string;
};

export async function toQR(params: toQRparams): Promise<string> {
  const { encrypt, returnType, data } = params;

  if (returnType === 'svg') {
      const result = await QRCode.toString(data, { type: 'svg' });
      return result;
  }

  if (returnType === 'image') {
      const result = await QRCode.toDataURL(data);
      return result;
  }

  if (returnType === 'text') {
      const result = await QRCode.toString(data, { type: 'utf8' });
      return result;
  }

  throw new Error('Unsupported returnType or functionality not implemented');
}