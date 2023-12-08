# xfp: master fingerprint
Reproduce master fingerprint from XPUB

## Overview
Most of the wallet softwares provide 8 digit hex identifiers for each wallet. This is officially defined as "key fingerprint" in [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#user-content-Key_identifiers), and is often labeled as "master fingerprint" (i.e., COLDCARD and Sparrow).

Master fingerprint shown in COLDCARD is derived from the top-level (`m/`) master xpub, regardless of your choice of wallet systems such as Native Segwit (BIP-84). If you want to reproduce the master fingerprint from xpub by yourself, you can do with this script.

## Steps
- Export Generic JSON wallet file from COLDCARD [(link)](https://github.com/Coldcard/firmware/blob/master/docs/generic-wallet-export.md)
    - Note that xpub shown in Sparrow wallet is for specific wallet system (i.e., Native Segwit). This is different from the xpub of root path.
- Copy the `xpub` from the root level, not for individual wallet systems
- Paste the xpub in the script
- Run the script: `node fingerprint.js`

## Setup
```sh
npm install
vim fingerprint.js # Edit xpub
node fingerprint.js
```

## License
[MIT](https://github.com/mu373/master-fingerprint/blob/main/LICENSE)
