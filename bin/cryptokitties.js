

function CryptoKittyArbitrage (argv) {
    //console.log("finding kitties under " + argv.eth_price_threshold);
    
    //setup web3, infura, and APIs
    var HDWalletProvider = require("truffle-hdwallet-provider");
    var Web3 = require("web3");
    var walletAPIUrl = "https://mainnet.infura.io/v3/8235d0efb49f4a8eaacdb0544078d834";
    var mnemonic = argv.wallet_mnemonic;
    const opensea = require("opensea-js");

    
    //use mnemonic as provider for web3
    const provider = new HDWalletProvider(
    mnemonic,
    walletAPIUrl
    );
    
    //web3 isntance setup complete
    //NOTE: This is use the primary count number of the mnemonic
    const web3 = new Web3(provider);
    web3.eth.getAccounts().then(acct => {
        console.log("\nresp = " + acct);
    });
    
    var w = web3.toWei(1, "ether");
    var eth_bal = 0;
    eth_bal = web3.eth.getBalance(web3.eth.accounts[0])/w;
    console.log("you got ");
    console.log(eth_bal);

    
    //kitty contract at 0xb1690c08e213a35ed9bab7b318de14420fb57d8c. 
    //Next line is the ABI. Maybe there is a better what to load this? This works for now
    var kittyABI =  [{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_seller","type":"address"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lastGen0SalePrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAuction","outputs":[{"name":"seller","type":"address"},{"name":"startingPrice","type":"uint256"},{"name":"endingPrice","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"startedAt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerCut","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isSaleClockAuction","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuctionWhenPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gen0SaleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getCurrentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonFungibleContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"averageGen0SalePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_nftAddr","type":"address"},{"name":"_cut","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"startingPrice","type":"uint256"},{"indexed":false,"name":"endingPrice","type":"uint256"},{"indexed":false,"name":"duration","type":"uint256"}],"name":"AuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"totalPrice","type":"uint256"},{"indexed":false,"name":"winner","type":"address"}],"name":"AuctionSuccessful","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"AuctionCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]
    var contract = new web3.eth.Contract(kittyABI);
    contract.options.address = '0xb1690c08e213a35ed9bab7b318de14420fb57d8c';
    contract.options.from = argv.wallet_address;
    
   //get all for sale kitties from open sea api
   const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main
}   );
   
   //TODO:
   //make sure you have enough ETH in account.
   
   var search = true;
   
   console.log("Start plundering");
   while(search && eth_bal > 0.000001){ //go forth and artbitrage while you still have funds
      search = false; //REMOVE TODO
      
      //check for ones less than argv.eth_price_threshold
      
      //TODO
      // Identify cheap kitties https://api.cryptokitties.co/v2/kitties?offset=0&limit=12&include=sale&parents=false&authenticated=false&orderBy=current_price&orderDirection=asc&total=true
   
      //TODO buy cheap kitty if it fullfills our criteria (less than amount specified, we have enough in our account)
      
          //TODO
    //list cheap kitties on opensea
        //get the kitty bought.
        //set a new price increase_percentage above buy price.
        //send to opensea for sale.
   }
    //TODO how many kitties were bought?
    console.log("...end plundering.")
    provider.engine.stop();

}//END FUNCTION

module.exports.CryptoKittyArbitrage = CryptoKittyArbitrage;
