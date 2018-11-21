#! /usr/bin/env node

//console.log("Plunder!!");

var argv = require('yargs')
    .usage('Usage: $0 -wallet_mnemonic [string of words] -wallet_address [ethereum address] -eth_budget [num] -eth_price_threshold [num] increase_percentage [number 0 - 100] -asset_classes [cryptokitties,axie]')
    .demandOption(['wallet_mnemonic','wallet_address', 'eth_budget', 'eth_price_threshold', 'increase_percentage', 'asset_classes'])
    .argv;

/* Search for cheap Kitties */


/* Buy Cheap Kitties */
 

/* Sell kitties for profit on Open Sea using OpenSea.js */