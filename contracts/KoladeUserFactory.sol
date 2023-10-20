// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./KoladeUser.sol";
import "./KoladeToken.sol";

contract KoladeUserFactory is Ownable {
    address[] public users;
    KoladeToken public tokenContract;

    event UserCreated(address indexed user);

    constructor(address _tokenContractAddress) Ownable(msg.sender) {
        tokenContract = KoladeToken(_tokenContractAddress);
    }

    function createUser(string memory _name, uint256 etherPayment) public payable {
        uint256 minimumEtherPayment = 1000 wei;
        require(msg.value >= minimumEtherPayment, "Insufficient Ether payment");
        require(etherPayment >= minimumEtherPayment, "Insufficient Ether payment");

        uint256 tokenAmount = etherPayment / 10;

        KoladeUser newUser = new KoladeUser(_name, address(tokenContract));
        users.push(address(newUser));
        emit UserCreated(address(newUser));

        newUser.setTokenAmount(tokenAmount);
    }

}
