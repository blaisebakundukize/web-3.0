// https://eth-goerli.g.alchemy.com/v2/KMiWUPspluCGR9wzbmm9T-Osv8yhuML_

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: '',
      accounts: ['']
    }
  }
};
