const Spacebear = artifacts.require("Spacebear");

module.exports = function (deployer) {
  deployer.deploy(Spacebear, "0x7b89751eae5f7708831fa3b51de8ff1a6f3839c3");
};
