// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTContract is ERC1155, Ownable {
    uint256 public constant artwork = 0;
    uint256 public constant photo = 1;

    constructor() ERC1155("https://inkmvcv5mupx.usemoralis.com/{id}.json") {
        _mint(msg.sender, artwork, 1, "");
        _mint(msg.sender, photo, 2, "");
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount
    ) public onlyOwner {
        _mint(account, id, amount, "");
    }

    function burn(
        address account,
        uint256 id,
        uint256 amount
    ) public {
        require(msg.sender == account);
        _burn(account, id, amount);
    }
}
