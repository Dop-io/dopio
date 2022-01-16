// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract NFTContract is ERC1155 {
    uint256 public constant punk1 = 0;
    uint256 public constant punk2 = 1;
    uint256 public constant punk3 = 2;

    constructor() ERC1155("https://udbllszok5jz.usemoralis.com/{id}.json") {
        _mint(msg.sender, punk1, 1, "");
        _mint(msg.sender, punk2, 2, "");
        _mint(msg.sender, punk3, 1, "");
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount
    ) public {
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
