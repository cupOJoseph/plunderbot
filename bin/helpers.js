//=================== Helper Functions =====================//
/* Because of the very async nature of working with
* many APIs from NFT projects mixed with web3 calls
* A series of async helper functions will be kept here.
* These functions can be more easily nested in the main
* bin scripts for easier readability.
*/
var bn = require("bignumber.js");


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


/* Create a web3 provider. */
