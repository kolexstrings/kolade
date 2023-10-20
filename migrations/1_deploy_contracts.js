const KoladeToken = artifacts.require("KoladeToken");
const KoladeFactory = artifacts.require("KoladeFactory");

module.exports = function(deployer) {
  deployer.deploy(KoladeToken);
  deployer.link(KoladeToken, KoladeFactory);
  deployer.deploy(KoladeFactory);
};
