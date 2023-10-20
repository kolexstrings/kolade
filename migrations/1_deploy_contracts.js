const KoladeToken = artifacts.require("KoladeToken");
const KoladeUserFactory = artifacts.require("KoladeUserFactory");
const fs = require('fs');

module.exports = async function (deployer) {
  await deployer.deploy(KoladeToken);
  const koladeTokenInstance = await KoladeToken.deployed();

  console.log("KoladeToken has been successfully deployed to: ", koladeTokenInstance.address)

  await deployer.deploy(KoladeUserFactory, koladeTokenInstance.address);
  const koladeUserFactoryInstance = await KoladeUserFactory.deployed();
  
 

  console.log("koladeUserFactoryABI: ", koladeUserFactoryABI);  
  console.log("KoladeUserFactory has been successfully depployed to: ", koladeUserFactoryInstance.address);

  fs.writeFileSync('../build/contracts/koladeTokenData.json', JSON.stringify(koladeTokenData, null, 2));
  fs.writeFileSync('../build/contracts/koladeUserFactoryData.json', JSON.stringify(koladeUserFactoryData, null, 2));
};
