const serverUrl = "https://inkmvcv5mupx.usemoralis.com:2053/server";
const appId = "zN8sE9c1gNR7UQaHoNCrV3AryV2JouXgQ3FYDhgS";
CONTRACT_ADDRESS = "0x924a32A26dbD2e17d70f3cdC529f26BE5A0B6803";

Moralis.start({ serverUrl, appId });

async function init() {
    let currentUser = Moralis.User.current();
    if (!currentUser) {
        window.location.pathname = "/index.html"
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }



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



