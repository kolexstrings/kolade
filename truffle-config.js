require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
const infuraApi = process.env.INFURA_PROJECT_ID;
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, infuraApi),
      network_id: "*",
      chain_id: 11155111
    }
  },

  // Set default mocha options here, use special reporters etc.
  // mocha: {
  //   // timeout: 100000
  // },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20",  // Fetch exact version from solc-bin
    }
  }
};
