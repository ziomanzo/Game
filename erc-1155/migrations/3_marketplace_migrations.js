
//here we know that the token migration is done


var Token = artifacts.require("./GameToken.sol");
var Marketplace = artifacts.require("./Marketplace.sol");

module.exports = (deployer) => deployer    //export series of events
  .then( () => deployMarketplace(deployer));

  function deployMarketplace(deployer){
    return deployer.deploy(Marketplace, Token.address);

  }
