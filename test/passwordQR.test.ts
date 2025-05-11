// This doesn't test if the data is correct in the QR only if
// the QR is generated

import { expect, test } from 'vitest';
import { toQR } from '../src/toQR';

test('toQR - Password type SVG', async () => {
  const QR = await toQR({ password: 'test', encryptedFormat: 'json', returnType: 'svg', data: 'test' });
  expect(QR.startsWith('<svg')).toBe(true);
})

test('toQR - Password type image', async () => {
    const QR = await toQR({ password: 'test', encryptedFormat: 'json', returnType: 'image', data: 'test' });
    expect(QR.startsWith('data:image/')).toBe(true);
})

test('toQR - Password type text', async () => {
  const QR = await toQR({ password: 'test', encryptedFormat: 'json', returnType: 'text', data: 'test' });
  const NORMALIZED_QR = QR.replace(/\s+/g, '')
  const EXPECTED = '█▀▀'
  const NORMALIZED_EXPECTED = EXPECTED.replace(/\s+/g, '')
  expect(NORMALIZED_QR.startsWith(NORMALIZED_EXPECTED)).toBe(true)
})