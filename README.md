[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/KaruzG/qrcrypt)

[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# qrcrypt

Simple QR Generator package that allows to encrypt QR data.

> [!CAUTION]
> This package encrypts data in QR codes, but **it is not intended for highly sensitive information**. Use with caution  _encryption does not guarantee full security._


## Installation

Install qrcrypt with npm

```bash
npm install qrcrypt
```

## Usage/Examples


### Generate normal svg QR

```javascript
import { toQR } from 'qrcrypt'

async function generateQR() {
    const QR = await toQR({returnType: 'svg', data: `https://duckduckgo.com`});
    console.log(QR) // Out: <svg xmlns="htt...
}
```

### Generate encrypted svg QR

```javascript
import { toQR } from 'qrcrypt'

async function generateQR() {
    const QR = await toQR({password:'key', returnType: 'svg', data: `...`});
    console.log(QR) // Out: <svg xmlns="htt...
}
```

## Detail

Qrcrypt is an extension of the [qrcode](https://www.npmjs.com/package/qrcode) package and it's objective is to chain it with an external web to authenticate the passwords. **For now, when reading an encrypted QR, it can show the data as a JSON or can redirect to an URL with the data needed to decrypt as URI parameters.**
My intention is to have a way to validate the passwords without the need of internet or a special app. But because of security reasons in common QR code readers this is on work in progress.

## API

### toQR( {parameters} )

#### Parameters:<br>
· data: `string`
_This will be the data that the QR stores_

· returnType: `'image' | 'text' | 'svg'`
_Format of the QR_

#### Encrypted QR parameters:<br>
· password: `string`
_Key for the encryption_

· encryptedFormat: `'json' | 'web'`
_How the data 'inside' the QR looks._<br>
json: <br>
```{salt:"...",iv:"...",data:"..."}```

web: <br>
```https://url.com/?salt=...&iv=...&data=...```

· authWebURL: `'string` _Url to redirect with the URI parameters_

## LICENSE

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it.  
**No warranty is provided. Use at your own risk.**
