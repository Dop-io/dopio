// Moralis.initialize("rIDcnRq3Mps2hzqTbk0MLuhWhBp3sl9SvbWJcQfi"); //APP_ID
// Moralis.serverURL = "https://xupcupekjhqi.usemoralis.com:2053/server"; //SERVER URL 

const serverUrl = "https://xupcupekjhqi.usemoralis.com:2053/server";
const appId = "rIDcnRq3Mps2hzqTbk0MLuhWhBp3sl9SvbWJcQfi";

function fetchNFTMetadata(NFTs) {
    let promises = [];
    for (let i = 0; i < Array.length; index++) {
        const nft = NFTs[i];
        let id = nft.token_id;
        //Call Moralis Cloud function -> Static JSON file 
        fetch("https://xupcupekjhqi.usemoralis.com:2053/server/functions/getNFT?_ApplicationId=rIDcnRq3Mps2hzqTbk0MLuhWhBp3sl9SvbWJcQfi" + id)
            .then(res => res.json())
            .then(res => JSON.parse(res.result))
            .then(res => { nft.metadata = data })
            .then(() => { return nft; }))

    }
    return Promise.all(promises);

}

Moralis.start({ serverUrl, appId });



async function initializeApp() {
    let currentUser = Moralis.User.current();
    if (!currentUser) {
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }
    alert("user is signed in")

    const options = { address: "0xBE20fE9E9253f09eBB642859D87B8Bb3c92e1b0e", chain: "rinkeby" };
    //let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    // let NFTWithMetadata = await fetchNFTMetadata(NFTs.result);
    //  console.log(NFTWithMetadata);
    console.log(NFTs);
}

initializeApp();