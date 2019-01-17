var HDWalletProvider = require("truffle-hdwallet-provider");
var Web3 = require("web3");
var walletAPIUrl = "https://mainnet.infura.io/v3/8235d0efb49f4a8eaacdb0544078d834";

const opensea = require("opensea-js");
var hh = require("http-https");
var bn = require("bignumber.js");
const helper = require("./helpers.js");//local file.

function CryptoKittyArbitrage (argv) {
    //console.log("finding kitties under " + argv.eth_price_threshold);

    var mnemonic = argv.wallet_mnemonic;

    //use mnemonic as provider for web3
    const provider = new HDWalletProvider(
    mnemonic,
    walletAPIUrl
    );

    //web3 isntance setup complete
    //NOTE: This is use the primary count number of the mnemonic
    const web3 = new Web3(provider);
    var starting_balance_wei = helper.checkETHBalance(web3);//TODO make callback


    //kitty contract at 0xb1690c08e213a35ed9bab7b318de14420fb57d8c.
    //Next line is the ABI. Maybe there is a better what to load this? This works for now
    var kittyABI =  [{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_startingPrice","type":"uint256"},{"name":"_endingPrice","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_seller","type":"address"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"lastGen0SalePrices","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getAuction","outputs":[{"name":"seller","type":"address"},{"name":"startingPrice","type":"uint256"},{"name":"endingPrice","type":"uint256"},{"name":"duration","type":"uint256"},{"name":"startedAt","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerCut","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isSaleClockAuction","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuctionWhenPaused","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gen0SaleCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"cancelAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getCurrentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nonFungibleContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"averageGen0SalePrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_nftAddr","type":"address"},{"name":"_cut","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"startingPrice","type":"uint256"},{"indexed":false,"name":"endingPrice","type":"uint256"},{"indexed":false,"name":"duration","type":"uint256"}],"name":"AuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"totalPrice","type":"uint256"},{"indexed":false,"name":"winner","type":"address"}],"name":"AuctionSuccessful","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"AuctionCancelled","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]
    var contract = new web3.eth.Contract(kittyABI);
    const kitty_address = '0xb1690c08e213a35ed9bab7b318de14420fb57d8c'; //auction contract. Set manually because this is CK buyer script
    contract.options.address = kitty_address;
    contract.options.from = argv.wallet_address;

   //get all for sale kitties from open sea api
   const seaport = new opensea.OpenSeaPort(provider, {
    networkName: opensea.Network.Main
    });


   var search = true;
   var amount_spent = 0;
   var starting_balance_eth = starting_balance_wei.times(1e18);
  //make sure you have enough ETH in account.
   if(argv.eth_budget > starting_balance_eth.toNumber()){
     //The amount you want to spend is more than
     console.error("Your ETH budget is greater than your balance. Try setting a lower budget or getting more ETH");
     search = false;
     console.log("start: ",starting_balance_eth.toNumber());
     console.log("budget: ", argv.eth_budget);
   }

   console.log("Start plundering");
   /*===================================================
   Requirements to plunder:
   - There is enough eth in your account to buy things.
   - The amount spent on buying has not exceeded your budget.
   - something else has not gone wrong (search == false), like web request fails
   =======================================================*/
   while(search && argv.eth_bal > 0.000001 && argv.eth_budget > amount_spent){ //go forth and artbitrage while you still have funds
      search = false; //REMOVE TODO

      //note limit in the url is set to 1. this should be a variable, could be interesting TODO
      var cheap_kitty_url = "https://api.cryptokitties.co/v2/kitties?offset=0&limit=1&include=sale&parents=false&authenticated=false&orderBy=current_price&orderDirection=asc&total=true";
      // Identify cheap kitties
      var req = hh.get(cheap_kitty_url, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log("Arrrr, matey, we found somethin'");
        //Cheapest kitty is:
        var kitties = JSON.parse(data).kitties;
        var kitty = kitties[0];
        //console.log(kitty);

        var wei_price = kitty.auction.current_price;
        var price = new bn(10e-18);

        console.log("price: ", price);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });

      //check for ones less than argv.eth_price_threshold


      //TODO buy cheap kitty via web3 call to kitty_address = auction contract
      //

    var sell_price = price + (price * argv.increase_percentage / 100);
    const expirationTime = (Date.now() / 30000 + 60 * 60 * 24);//sell order is live for 30 days. //TODO allow user to set order time

    //SELL on open sea
    //We do not use 'await' here because we want to keep plundering.//TODO Async issues
    const auction = seaport.createSellOrder({ kitty.id, kitty_address, argv.wallet_address, sell_price, sell_price, expirationTime })

   }//End search
    //TODO how many kitties were bought?
    console.log("... plundering over.")
    provider.engine.stop();

}//END FUNCTION

module.exports.CryptoKittyArbitrage = CryptoKittyArbitrage;
