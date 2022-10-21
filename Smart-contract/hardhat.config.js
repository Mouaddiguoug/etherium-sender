//https://eth-ropsten.alchemyapi.io/v2/97bQDAu_Zjg8gy2qCTGU-AL_KQfK7k__

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/97bQDAu_Zjg8gy2qCTGU-AL_KQfK7k__",
      accounts: ["64777968443220d66968b5d2b157fe25d0f2fd823b5e491eb56fbf16c7a27716"]
    }
  }
}