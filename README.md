# plunderbot
An bot that finds arbitrage opportunities on OpenSea and plunders them for profit. Uses OpenSea.js

## Installation
```
npm install plunderbot
```

## Usage
Use `plunderbot` in your terminal or bash window. Try `plunderbot --help` for options.

### Arguments
- wallet_mnemonic: The mnemonic for the wallet to use. *Enter seed phrase words surrounded by quotes* Example: `$plunderbot -wallet_mnemonic "witch collapse practice feed shame open despair creek road again ice least" ...`
- wallet_address: The address of the wallet to use.
- eth_budget: The amount of ETH the wallet is allowed to spend.
- price_increase_percentage: How much higher to relist the items.
- asset_classes: Comma-separated list of asset classes (e.g., cryptokitties,mlbcrypto)


## Dependencies
- Node
- yargs 12.0.5
