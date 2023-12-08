const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')
const bip32 = BIP32Factory(ecc)

function getFingerprintFromXpub(xpub) {
    try {
        const node = bip32.fromBase58(xpub);

        const fingerprint = node.fingerprint.toString("hex").toUpperCase()
        return fingerprint;
    } catch (error) {
        console.error('Error getting fingerprint:', error);
        return null;
    }
}

// Provide the xpub for the root ('m/')
// This is available in the top of generic JSON, exported from COLDCARD.
// {
//   "chain": "BTC",
//   "xfp": "YOUR_XFP",
//   "account": 0,
//   "xpub": "YOUR_XPUB_FOR_ROOT",
//   "bip44": {
//      ...
//   }
// }
const xpub = 'xpub_______'

const xfp = getFingerprintFromXpub(xpub);
console.log('Master Fingerprint:', xfp);
