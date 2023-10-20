// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KoladeToken is ERC20 {
    constructor() ERC20("Kolade Token", "KT") {
        _mint(msg.sender, 1000000 * 10 ** uint(decimals()));
    }
}
