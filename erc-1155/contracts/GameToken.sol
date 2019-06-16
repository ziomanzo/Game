pragma solidity 0.5.0;

import "../lib/ERC1155.sol";  //inherit functionality of ERC1155
import "../lib/ERC1155Mintable.sol"; // and ERC1155Mintable

contract GameToken is ERC1155, ERC1155Mintable {
  // Gametoken inherits from erc1155 and erc1155Mintable

constructor() public {


 }

}
