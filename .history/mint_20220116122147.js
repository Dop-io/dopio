const serverUrl = "https://udbllszok5jz.usemoralis.com:2053/server";
const appId = "rBVQwUHgIg2xttPvWFTAPyB6hkcuZmHkc7drTcWQ";
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
    let tokenId = parseInt(document.getElementById("token_id_input").value);
    let address = document.getElementById("address_id_input").value;
    let amount = parseInt(document.getElementById("amount_id_input").value)
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS);
    contract.methods.mint(address, tokenId, amount).send({ from: accounts[0], value: 0 })
        .on("receipt", function (receipt) {
            alert("Mint done");
        })
}

document.getElementById("submit_mint").onclick = mint;

init();



