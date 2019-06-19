pragma solidity 0.5.0;      

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

	//get ERC20 functionality

contract ZioBitCoin is ERC20, ERC20Detailed {



	// constructor for the ziobitcoin ERC20 token with a name, symbol and amount of decimals

constructor (string memory _name,string memory _symbol,uint8 _decimals)
ERC20Detailed(_name, _symbol, _decimals)
public
{}


	// mint function to mint ziobitcoins

  function mint(address to, uint256 value) public returns (bool){
    _mint(to, value);  
    return true;

  }



}
