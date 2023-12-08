# xfp: master fingerprint
Reproduce master fingerprint from XPUB

## Overview
Most wallet software provides 8-digit hex identifiers for each wallet. This is officially defined as a "key fingerprint" in [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#user-content-Key_identifiers), and is often labeled as a "master fingerprint" in major wallet hardware/software (e.g., COLDCARD and Sparrow). With this short identifier, you can easily ensure that you are accessing the intended wallet, for example, the wallet with the correct BIP39 passphrase.

The master fingerprint shown in COLDCARD is derived from the top-level (`m/`) master xpub, regardless of your choice of wallet systems such as Native Segwit (BIP-84). If you want to reproduce the master fingerprint from xpub by yourself, you can do so with this script.

## Steps
- Export Generic JSON wallet file from COLDCARD [(link)](https://github.com/Coldcard/firmware/blob/master/docs/generic-wallet-export.md)
    - Note that xpub shown in Sparrow wallet is for a specific wallet system (i.e., Native Segwit). This is different from the xpub of the root path.
- Copy the `xpub` from the root level, not for individual wallet systems
- Paste the xpub in the script
- Run the script: `node fingerprint.js`

## Usage
```sh
npm install
vim fingerprint.js # Edit xpub
node fingerprint.js
```

## License
[MIT](https://github.com/mu373/master-fingerprint/blob/main/LICENSE)
