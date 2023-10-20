const KoladeToken = artifacts.require("KoladeToken");
const KoladeUserFactory = artifacts.require("KoladeUserFactory");

module.exports = async function (deployer) {
  await deployer.deploy(KoladeToken);
  const koladeTokenInstance = await KoladeToken.deployed();

  await deployer.deploy(KoladeUserFactory, koladeTokenInstance.address);
};
