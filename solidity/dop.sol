pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CryptoDop is ERC721, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("CryptoDop", "DOP") {}
    
    function mint(uint256 tokenId) public payable {
        
        require(msg.value >= 0.05 ether, "Not enough ETH sent: check price.");
        _safeMint(_msgSender(), tokenId);
}
