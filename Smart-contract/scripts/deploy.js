
const main = async () => {
  const Transaction = await hre.ethers.getContractFactory("Transaction");
  const transaction = await Transaction.deploy();

  await transaction.deployed();

  console.log("Transactions deployed to:", transaction.address);
}

const runMain = async () => {
  try{
    await main();
    Process.exit(0);
  } catch(error) {
    console.error(error);
    ProcessingInstruction.exit(1);
  }
}
runMain();