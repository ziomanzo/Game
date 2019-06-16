pragma solidity < 0.5.4;             // Marketplace contract
import "../lib/IERC1155.sol";                 //using erc1155 interface


contract Marketplace {

    IERC1155 private _token;     //state variable that holds the token.  Connection to the GameToken smart contract

    mapping (uint256 => uint256) price;    // mapping ID to specify the price
              //ID  -> price            // price is a variable of this mapping array price[1], 2 , 3 ..

    constructor (IERC1155 token) public {
        require(address(token) != address(0));
        _token = token;  //set to state variable
        price[1] = 100000000000000;    //set price to an ID of token
        price[2] = 200000000000000;
        price[3] = 300000000000000;  // 3 different types of tokens with their price
    }

    function () external payable {     //if you dont specify anything, it will still execute buyToken[id 1]
        buyToken(1);
    }

    function buyToken(uint256 tokenId) public payable{     // function buytoken
        uint256 weiAmount = msg.value;   // put value in weiamount variable
        require(weiAmount >= price[tokenId] && price[tokenId] != 0);
          //check for enough balance and if this ID exist in mapping (not zero)


        _token.safeTransferFrom(address(this), msg.sender, tokenId, 1, "");
        // transfer          this = marketplace adress   tokenID, 1(how many to tranfer), "arbitrary data"

    }

    //check  erc1155recieved?   yes or no??  expect to return a hash  to allow further transacting
    // like a stamp to approve
  function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data) external returns(bytes4){
        return bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"));
   }
}
