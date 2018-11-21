#! /usr/bin/env node

//console.log("Plunder!!");

var argv = require('yargs')
    .usage('Usage: $0 -wallet_mnemonic [string of words with underscores] -wallet_address [ethereum address] -eth_budget [num] -eth_price_threshold [num] increase_percentage [number 0 - 100] -asset_classes [cryptokitties,axie]')
    .demandOption(['wallet_mnemonic','wallet_address', 'eth_budget', 'eth_price_threshold', 'increase_percentage', 'asset_classes'])
    .argv;
    
    /* Example
    plunderbot --wallet_mnemonic "apple biscuit church" --wallet_address 0x123abc --eth_budget 0.5 --eth_price_threshold 0.01 --increase_percentage 5 --asset_classes cryptokitties,axies

    */
    


/* Sanity Checks */
//make sure you have that much eth in the account TODO

// make sure the price threshold is smaller than budget and is a small-ish number TODO
// if its not a good small number give a warning and suggestion TODO

/* Search for cheap Kitties */


/* Buy Cheap Kitties */
 

/* Sell kitties for profit on Open Sea using OpenSea.js */