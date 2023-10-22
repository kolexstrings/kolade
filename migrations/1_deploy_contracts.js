const KoladeToken = artifacts.require("KoladeToken");
const KoladeUserFactory = artifacts.require("KoladeUserFactory");

module.exports = async function (deployer) {
  await deployer.deploy(KoladeToken);
  const koladeTokenInstance = await KoladeToken.deployed();

  console.log("KoladeToken has been successfully deployed to: ", koladeTokenInstance.address)

  await deployer.deploy(KoladeUserFactory, koladeTokenInstance.address);
  const koladeUserFactoryInstance = await KoladeUserFactory.deployed();
  

  console.log("koladeUserFactoryABI: ", koladeUserFactoryABI);
  console.log("KoladeUserFactory has been successfully depployed to: ", koladeUserFactoryInstance.address);
};
