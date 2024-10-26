// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentProcessor {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Accept payments to this contract
    function pay() external payable {
        require(msg.value > 0, "Must send MATIC to pay");
    }

    // Withdraw MATIC to the owner's address
    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
