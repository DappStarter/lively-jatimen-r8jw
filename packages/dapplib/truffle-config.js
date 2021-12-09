require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name release magic minor hope clock metal giant'; 
let testAccounts = [
"0x22600cde9b631b9780c0af0cfbcb6e264f55045b3168cb39e2dfc6d5a59343cd",
"0x37aa3a1208c00ed4c0ad22dad8e92a6661a03c08da34554ef8e3484810dd70db",
"0x34246b373900afce4e00589a720eaed9a7604e5096be39f03e2c88ad72943d00",
"0xc8c2fd42dc5e941811597df853af2c7e0fcc89a8e4743adef3de48479911c59a",
"0x94bdfeb7effa1d0d60454ff604514c40eee2a75938720b42be15f15058750277",
"0xbe2d252f16a51dfc02c48a224ac1a4ee36e35ba717c7ed0f1ac60fbc544793de",
"0xb72f99200d69747e7b6996f18e11396171c6781941833d12bf5409491741cf81",
"0x7e0b9401143d31514656efbae0b200fc29414d197f778ed3a5fd737d99603040",
"0x98272e2513f9deca47ad18605670ce2818fc9131cf193ff092b4332e124ad81b",
"0x24e0ef33322d2795d82ab745f0d5e7b9cd96d7c5ffd23d30e3fe78ce88c739a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

