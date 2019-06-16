var Token = artifacts.require("./GameToken.sol");
var Marketplace = artifacts.require("./Marketplace.sol");

module.exports = (deployer) => deployer    //export series of events
  .then( () => createToken1())
  .then( () => createToken2())
  .then( () => createToken3())
  .then( () => mintTokens());

        //assynchronous: wait for token instance, then execute functions in contract (create function, mintable)
        async function createToken1(){
          (await Token.deployed()).create(0, "");
// id1                        create(zero initial supply, )
        }

        async function createToken2(){
          (await Token.deployed()).create(0, "");
//id2
        }
        async function createToken3(){
          (await Token.deployed()).create(0, "");
//id3
        }

     function mintTokens(){     //mint and send to marketplace address

        Token.deployed().then(instance => {
        instance.mint(1, [Marketplace.address], [30]);
              //(id 1, array adress, mint 30 items)
        instance.mint(2, [Marketplace.address], [20]);
        instance.mint(3, [Marketplace.address], [10]); //more exclusive only 10
      })

    }
