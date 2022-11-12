async function main() {
  const KContractFactory = await ethers.getContractFactory("KKDEV");

  const { ACCOUNT_ADDRESS } = process.env;

  const transaction = await KContractFactory.deploy(ACCOUNT_ADDRESS);
  console.log("Contract deployed to address:", transaction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
