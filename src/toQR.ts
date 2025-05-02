import QRCode from 'qrcode';

type toQRparams = {
  encrypt: boolean;
  returnType: 'image' | 'text' | 'svg';
  data: string;
};

export async function toQR(params: toQRparams): Promise<string> {
  const { encrypt, returnType, data } = params;

  if (returnType === 'svg') {
    try {
      const result = await QRCode.toString(data, { type: 'svg' });
      return result;
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw error;
    }
  }

  console.error('Unsupported returnType or functionality not implemented');
  throw new Error('Unsupported returnType or functionality not implemented');
}