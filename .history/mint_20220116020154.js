const serverUrl = "https://inkmvcv5mupx.usemoralis.com:2053/server";
const appId = "zN8sE9c1gNR7UQaHoNCrV3AryV2JouXgQ3FYDhgS";
CONTRACT_ADDRESS = "0x924a32A26dbD2e17d70f3cdC529f26BE5A0B6803";
let web3;

Moralis.start({ serverUrl, appId });

async function init() {
    let currentUser = Moralis.User.current();
    if (!currentUser) {
        window.location.pathname = "/index.html"
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }

    web3 = await Moralis.Web3.enable();
    let accounts = await web3.eth.getAccounts();

    const urlParams = new URLSearchParams(window.location.search)
    const nftId = urlParams.get("nftId");
    document.getElementById("token_id_input").value = nftId;
    document.getElementById("address_id_input").value = accounts[0];

}


async function mint() {
    let tokenId = parseInt(document.getElementById("token_id_input"));
    let address = document.getElementById("address_id_input");
    let amount = parseInt(document.getElementById("amount_id_input"))
    const contract = new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS)
}


init();



