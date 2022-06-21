require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food eight reflect noise exchange coral light army giant'; 
let testAccounts = [
"0x5f466b27c05192bfd94b365776510329b5e676501c926b661093ca637a602a02",
"0x8ee7f4cf2bd2b87f42e44abea2956e9d4f963f40b4066938211ec00f9dccac3b",
"0x53cdb82750923f2afee2b6e8e0a5688a051a5ab1aaf948062298c3404c96bbcf",
"0xde8dd5ea37006eb908cd409a6ec4ea924d220e093bf9dc3bf721e97bee22547f",
"0x6fd73f3bd610d7a880c0e37f149e02fad64e661e2587cd5ceb632ce7dcef1457",
"0x08be9d12f241cde2157be0323864110aded81f58e6b02e8e3cef84e3f0b3e179",
"0x4833c0914c578ec86bca28d8bfd9c0eab9bd20794529e2a6a40e1e94fbf2c047",
"0xc13423299739e3693ae4106fe4335d1d26d25f6ce25cb97574d02c7cab63bb14",
"0xbdcb6acbdd38994c3ede99a759f5652c69f43f34eceeae36e643736f78d7ad0b",
"0xb08f6c1bcebc7f0a5d1f9987a889c62cdc2f6bde3c03bcef7fea694f3c2691d5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

