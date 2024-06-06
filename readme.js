const fs = require('fs');

const content = `
# Metarcrafters Token Contract

A simple ERC20-like token contract in Solidity with minting and burning functionality.

## Description

The \`Metarcrafters\` token contract is a basic smart contract on the Ethereum blockchain that allows for the creation, management, and destruction of tokens. It includes functionality to mint new tokens to any address and burn tokens from any address. The contract maintains public variables for token name, abbreviation, and total supply, as well as a mapping to track balances of different addresses.

## Getting Started

### Prerequisites

* [Solidity](https://soliditylang.org) compiler (version 0.8.18)
* Ethereum development environment (e.g., [Remix](https://remix.ethereum.org), [Truffle](https://www.trufflesuite.com/truffle), or [Hardhat](https://hardhat.org))

### Installing

1. Clone the repository or copy the Solidity code into your preferred Ethereum development environment.
2. Ensure you have the Solidity compiler version 0.8.18 installed.

### Compiling and Deploying

#### Using Remix

1. Open [Remix](https://remix.ethereum.org).
2. Paste the Solidity code into a new file.
3. Compile the contract by selecting the appropriate compiler version.
4. Deploy the contract using the Remix interface.

#### Using Truffle

1. Initialize a Truffle project and create a new Solidity file in the \`contracts\` directory.
2. Paste the Solidity code into the file.
3. Compile the contract using the following command:
   \`\`\`sh
   truffle compile
   \`\`\`
4. Deploy the contract to your preferred network:
   \`\`\`sh
   truffle migrate --network <network_name>
   \`\`\`

#### Using Hardhat

1. Initialize a Hardhat project and create a new Solidity file in the \`contracts\` directory.
2. Paste the Solidity code into the file.
3. Compile the contract using:
   \`\`\`sh
   npx hardhat compile
   \`\`\`
4. Deploy the contract using:
   \`\`\`sh
   npx hardhat run scripts/deploy.js --network <network_name>
   \`\`\`

## Executing Functions

### Minting Tokens

To mint tokens, call the \`mint\` function with the recipient's address and the amount of tokens to be minted.

\`\`\`solidity
function mint(address _address, uint _value) public
\`\`\`

Example:

\`\`\`solidity
mint("0x123...", 100);
\`\`\`

### Burning Tokens

To burn tokens, call the \`burn\` function with the holder's address and the amount of tokens to be burned.

\`\`\`solidity
function burn(address _address, uint _value) public
\`\`\`

Example:

\`\`\`solidity
burn("0x123...", 50);
\`\`\`

## Help

For common issues or questions:
* Ensure the Ethereum client or development environment is properly configured.
* Verify the Solidity version used matches the contract's version (0.8.18).
* Check for sufficient gas when deploying or interacting with the contract.

## Authors

Hardhik Kurumaddali


`;

fs.writeFileSync('README.md', content.trim(), 'utf8');

console.log('README.md file has been generated!');
