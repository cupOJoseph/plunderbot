//=================== Helper Functions =====================//
/* Because of the very async nature of working with
* many APIs from NFT projects mixed with web3 calls
* A series of async helper functions will be kept here.
* These functions can be more easily nested in the main
* bin scripts for easier readability.
*/
var bn = require("bignumber.js");
var hh = require("http-https");



/* Get the user's ETH balance from web3.
*  Returns their balance as a number in ETH.
*/
function checkETHBalance (web3){
  var starting_balance_wei = new bn(-1);//must be negative, so if we can't

  var eth = web3.eth; //use web3 to check balanace:
  eth.getAccounts(function(err, accounts) {
    if(err != null){console.log(err);}
    else{
      eth.getBalance(accounts[0], function(err, bal){
        console.log("bal = ", bal);
        starting_balance_wei = bal;
        return bal;
      });
    }
  });
}

function getCheapKitty(){
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

    console.log("price in wei: ", wei_price);
  });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

  return kitty;
}


/* Create a web3 provider. */
