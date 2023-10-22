const { Web3 } = require('web3')
const { config } = require('dotenv');
const KoladeUserFactory = require('../../../build/contracts/KoladeUserFactory.json');

config();

const infuraApi = process.env.INFURA_PROJECT_URL;

const web3 = new Web3(infuraApi);
const factoryContract = new web3.eth.Contract(KoladeUserFactory.abi, '0x98832cCa1CDa43Fed5E7179445aB1D3FcF72AcC4');

module.exports = { web3, factoryContract };
