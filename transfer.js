const serverUrl = "https://udbllszok5jz.usemoralis.com:2053/server";
const appId = "rBVQwUHgIg2xttPvWFTAPyB6hkcuZmHkc7drTcWQ";
CONTRACT_ADDRESS = "0x0E291077Fd0d912177daF2815C94075CDbAC74b4";

Moralis.start({ serverUrl, appId });

async function init() {
    let currentUser = Moralis.User.current();
    if (!currentUser) {
        window.location.pathname = "/index.html"
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }

    web3 = await Moralis.Web3.enable();



    const urlParams = new URLSearchParams(window.location.search)
    const nftId = urlParams.get("nftId");
    document.getElementById("token_id_input").value = nftId;

}


async function transfer() {
    let tokenId = parseInt(document.getElementById("token_id_input").value);
    let address = document.getElementById("address_id_input").value;
    let amount = parseInt(document.getElementById("amount_id_input").value)

    const options = {
        type: "erc1155",
        receiver: address,
        contractAddress: CONTRACT_ADDRESS,
        tokenId: tokenId,
        amount: amount
    }
    let result = await Moralis.transfer(options)
    console.log(result);


}

document.getElementById("submit_transfer").onclick = transfer;

init();



