

function CryptoKittyArbitrage (argv) {
    //console.log("finding kitties under " + argv.eth_price_threshold);
    
    //setup web3, infura, and APIs
    import * as Web3 from 'web3'
    import { OpenSeaPort, Network } from 'opensea-js'

    const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

    const seaport = new OpenSeaPort(provider, {
        networkName: Network.Main
    })
    
    //Buy cheap kitties directly from kitty contract
        //Get a list of all for sale kitties
            //check if any are under argv.eth_price_threshold
            //buy one
    
    
    
    //list cheap kitties on opensea
        //get the kitty bought.
        //set a new price increase_percentage above buy price.
        //send to opensea for sale.
}

module.exports.CryptoKittyArbitrage = CryptoKittyArbitrage;
