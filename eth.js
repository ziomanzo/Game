

//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
web3 = new Web3(web3.currentProvider);     // set variable for ABI to the array of compiled contracts marketplace and gametoken
ethereum.enable();

var marketplaceAbi = [
  {
    "inputs": [
      {
        "name": "token",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "buyToken",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x2d296bf1"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "onERC1155Received",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf23a6e61"
  }
];


var tokenAbi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x00fdd58e"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_initialSupply",
        "type": "uint256"
      },
      {
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "create",
    "outputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x0118fa49"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x01ffc9a7"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "name": "_values",
        "type": "uint256[]"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2eb2c2d6"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owners",
        "type": "address[]"
      },
      {
        "name": "_ids",
        "type": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x4e1273f4"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_uri",
        "type": "string"
      },
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "setURI",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x67db3b8f"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_operator",
        "type": "address"
      },
      {
        "name": "_approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa22cb465"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "nonce",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xaffed0e0"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "creators",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xcd53d08e"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_to",
        "type": "address[]"
      },
      {
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xcfa84fc1"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ERC1155_RECEIVED",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe0a5c949"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe985e9c5"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf242432a"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ERC1155_BATCH_RECEIVED",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xfc67bf1c"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "TransferSingle",
    "type": "event",
    "signature": "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "TransferBatch",
    "type": "event",
    "signature": "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event",
    "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_value",
        "type": "string"
      },
      {
        "indexed": true,
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "URI",
    "type": "event",
    "signature": "0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b"
  }
];     // semicolon ???


  var token = new web3.eth.Contract(tokenAbi, "0xEB7851E510285aC254D9E025e33A5d4B938597bf");   //contract instance
  var marketplace = new web3.eth.Contract(marketplaceAbi, "0x385FF0b90AAFcB9F43Bb2980bf20458D7612483D");
//create contract object   with 2 arguments: abi,contract adress


function getUserItems(callback){   //check balance of the 3 items
      web3.eth.getAccounts().then(accountArray => {
          var account = accountArray[0];

          var tokenPromise1 = token.methods.balanceOf(account, 1).call();    //formulating questions to contract
          var tokenPromise2 = token.methods.balanceOf(account, 2).call();
          var tokenPromise3 = token.methods.balanceOf(account, 3).call();

Promise.all([tokenPromise1, tokenPromise2, tokenPromise3]).then(values => {   //asking to contract

  console.log("FETCHED USER ITEMS!");

  console.log(values);    // show wich items you have in console
                            //result from the contract

  var numberOfTalismans = values[0];
  var numberOfBoots = values[1];
  var numberOfCapes = values[2];

  if (numberOfTalismans > 0)
  COIN_GENERATION_INTERVAL = COIN_GENERATION_INTERVAL * Math.pow(0.75,numberOfTalismans);
  if (values[1] > 0)
  console.log("amount of Item2: " + values[1]);
  if (values[2] > 0)
  console.log("amount of Item3: " + values[2]);

  callback();  //callback to fetch items before the game loads

})

      });


}



  function buy(id){      // buy function       ID -> because non fungibles are unique
    web3.eth.getAccounts().then(accountArray => {  // web3 account: promise, wait until we get accountarray from metamask

        var options = {         //options var for send function
          from: accountArray[0],
          value: 0
        };
        if(id==1)                  //check for purchase of an item 1, 2 or 3 and the price in wei as value
        options.value= 100000000000000;
        else if(id==2)
        options.value = 200000000000000;
        else if(id==3)
        options.value = 300000000000000;

// .?????error
    marketplace.methods.buyToken(id).send(options) //send({from: account, value:10000}
      .on('receipt', receipt => {                //also promise, wait till confirmation from metamask then alert
    alert("Transaction Complete");
      })


    });

  // function mintAfterGame(address, nrOfTokens){    //old code to ask for adress
  //   contract.methods.mint(address, nrOfTokens).send({from: address})
  //   .on('receipt',receipt => {
  //     alert("TX complete");
  //   })


  }
