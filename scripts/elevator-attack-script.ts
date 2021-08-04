import { ethers } from "hardhat"

async function main() {
  const elevatorAddress = "0xB0af60faeC689EB82ED2EB2C3C7Ee2dE3FD8113f"

  const ElevatorAttack = await ethers.getContractFactory("ElevatorAttack")
  const elevatorAttack = await ElevatorAttack.deploy()

  await elevatorAttack.deployed()

  console.log("ElevatorAttack deployed to:", elevatorAttack.address)

  await elevatorAttack.attack(elevatorAddress)

  console.log("Done!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
