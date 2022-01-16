Moralis.initialize("rIDcnRq3Mps2hzqTbk0MLuhWhBp3sl9SvbWJcQfi"); //APP_ID
Moralis.serverURL("https://xupcupekjhqi.usemoralis.com:2053/server"); //SERVER URL 

async function initializeApp() {
    let currentUser = Moralis.User.currentUser();
    if (!currentUser) {
        //SIGN IN
        current = await Moralis.Web3.authenticate();
    }
    alert("user is signer in")
}