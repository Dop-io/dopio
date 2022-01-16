Moralis.initialize("rIDcnRq3Mps2hzqTbk0MLuhWhBp3sl9SvbWJcQfi"); //APP_ID
Moralis.serverURL = "https://xupcupekjhqi.usemoralis.com:2053/server"; //SERVER URL 

async function initializeApp() {
    let currentUser = Moralis.User.current();
    if (!currentUser) {
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }
    alert("user is signed in")


    const options = { address: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709", chain: "rinkeby" };
    const NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
}

initializeApp();