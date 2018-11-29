

function CryptoKittyArbitrage (argv) {
    //console.log("finding kitties under " + argv.eth_price_threshold);
    
    //TODO
    //setup web3, infura, and APIs
    var HDWalletProvider = require("truffle-hdwallet-provider");
    
    var mnemonic = argv.wallet_mnemonic;
    console.log(mnemonic);
    

    //TODO
    //Buy cheap kitties directly from kitty contract
        //Get a list of all for sale kitties
            //check if any are under argv.eth_price_threshold
            //buy one
    
    
    //TODO
    //list cheap kitties on opensea
        //get the kitty bought.
        //set a new price increase_percentage above buy price.
        //send to opensea for sale.
}

module.exports.CryptoKittyArbitrage = CryptoKittyArbitrage;
