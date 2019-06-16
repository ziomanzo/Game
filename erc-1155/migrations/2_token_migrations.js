var Token = artifacts.require("./GameToken.sol");
//import the token


module.exports = (deployer) => deployer     //export series of events
                                            //export code to wait for the deployer and then execute this
  .then( () => deployToken(deployer));      //(lenda function?) to deployToken function
//then is from 'promise' of deployer  (waiting for it)

  function deployToken(deployer){  //declare the deploytoken function
    return deployer.deploy(Token); //deploy token artifiact

  }
