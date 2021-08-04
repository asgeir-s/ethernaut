import { ethers } from "hardhat"

async function main() {
  const kingGameAddress = "0x663b587304fAC28B875BcE2A3b9c7D8D374d9288"

  const KingAttack = await ethers.getContractFactory("KingAttack")
  const kingAttack = await KingAttack.deploy(kingGameAddress, {
    value: ethers.utils.parseEther("1.00000001"),
    gasLimit: 1000000,
  })

  await kingAttack.deployed()

  console.log("King deployed to:", kingAttack.address)

  console.log("Done!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
