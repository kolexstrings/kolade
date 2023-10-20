const KoladeToken = artifacts.require("KoladeToken");
const KoladeUserFactory = artifacts.require("KoladeUserFactory");
const fs = require('fs');

module.exports = async function (deployer) {
  await deployer.deploy(KoladeToken);
  const koladeTokenInstance = await KoladeToken.deployed();

  const koladeTokenABI = koladeTokenInstance.abi;
  const koladeTokenAddress = koladeTokenInstance.address;

  const koladeTokenData = {
    tokenContractAbi: koladeTokenABI,
    tokenContractAddress: koladeTokenAddress
  }

  console.log("KoladeToken has been successfully deployed to: ", koladeTokenInstance.address)

  await deployer.deploy(KoladeUserFactory, koladeTokenInstance.address);
  const koladeUserFactoryInstance = await KoladeUserFactory.deployed();
  
  const koladeUserFactoryABI = koladeUserFactoryInstance.abi;
  const koladeUserFactoryAddress = koladeUserFactoryInstance.address;


  const koladeUserFactoryData = {
    factoryContractAbi: koladeUserFactoryABI,
    factoryContractAddress: koladeUserFactoryAddress
  }

  fs.writeFileSync('../build/koladeTokenData.json', JSON.stringify(koladeTokenData, null, 2));
  fs.writeFileSync('../build/koladeUserFactoryData', JSON.stringify(koladeUserFactoryData, null, 2));

  console.log("KoladeUserFactory has been successfully depployed to: ", koladeUserFactoryInstance.address);

};
