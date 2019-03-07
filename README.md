# plunderbot
An bot that finds arbitrage opportunities on OpenSea and plunders them for profit. Uses OpenSea.js

## Installation
```
npm install plunderbot
```

## Usage
Use `plunderbot` in your terminal or bash window. Try `plunderbot --help` for options.

Example full command:
`--wallet_mnemonic "witch collapse practice feed shame open despair creek road again ice least" --wallet_address 0x123abc --eth_budget 0.5 --eth_price_threshold 0.01 --increase_percentage 5 --asset_classes cryptokitties`


### Arguments
- wallet_mnemonic: The mnemonic for the wallet to use. *Enter seed phrase words surrounded by quotes* Example: `$plunderbot -wallet_mnemonic "witch collapse practice feed shame open despair creek road again ice least" ...` You can get one of these by creating ethereum accounts with metamask, myethereumwallet, or some other service. 
- wallet_address: The address of the wallet to use.
- eth_budget: The amount of ETH the wallet is allowed to spend.
- price_increase_percentage: How much higher to relist the items.
- asset_classes: Comma-separated list of asset classes (e.g., cryptokitties,mlbcrypto)


### Example
plunderbot
Usage: plunderbot -wallet_mnemonic [string of words with underscores]
-wallet_address [ethereum address] -eth_budget [num] -eth_price_threshold [num]
increase_percentage [number 0 - 100] -asset_classes [cryptokitties,axie]

## Dependencies
- Node
- yargs 12.0.5
