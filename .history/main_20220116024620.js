// Moralis.initialize("rIDcnRq3Mps2hzqTbk0MLuhWhBp3sl9SvbWJcQfi"); //APP_ID
// Moralis.serverURL = "https://xupcupekjhqi.usemoralis.com:2053/server"; //SERVER URL 

const serverUrl = "https://inkmvcv5mupx.usemoralis.com:2053/server";
const appId = "zN8sE9c1gNR7UQaHoNCrV3AryV2JouXgQ3FYDhgS";
CONTRACT_ADDRESS = "0x924a32A26dbD2e17d70f3cdC529f26BE5A0B6803";
let currentUser;

Moralis.start({ serverUrl, appId });


function fetchNFTMetadata(NFTs) {
    let promises = [];
    for (let i = 0; i <= Array.length; i++) {
        const nft = NFTs[i];
        let id = nft.token_id;
        //Call Moralis Cloud function -> Static JSON file 
        promises.push(fetch("https://inkmvcv5mupx.usemoralis.com:2053/server/functions/getNFT?_ApplicationId=zN8sE9c1gNR7UQaHoNCrV3AryV2JouXgQ3FYDhgS&nftId=" + id)
            .then(res => res.json())
            .then(res => JSON.parse(res.result))
            .then(res => { nft.metadata = res })
            .then(res => {
                const options = { address: CONTRACT_ADDRESS, token_id: id, chain: "rinkeby" };
                return Moralis.Web3API.token.getTokenIdOwners(options)
            })
            .then((res) => {
                nft.owners = [];
                res.result.forEach(element => {
                    nft.owners.push(element.owner_of);
                });
                return nft;
            }))

    }
    return Promise.all(promises);


}

function renderInventory(NFTs) {
    const parent = document.getElementById("app");
    for (let i = 0; i <= NFTs.length; i++) {
        const nft = NFTs[i];
        console.log(nft);
        let htmlString = `
        <div class="card" >
            <img class="card-img-top" src="${nft.metadata.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nft.metadata.name}</h5>
                <p class="card-text">Number of Onwers: ${nft.owners.length}</p>
                <p class="card-text">Items: ${nft.amount}</p>
                <a href="/mint.html?nftId=${nft.token_id}" class="btn btn-primary">Mint</a>
                <a href="/transfer.html?nftId=${nft.token_id}" class="btn btn-primary">Transfer</a>
            </div>
        </div>
        `

        let col = document.createElement("div");
        col.className = "col col-md-4"
        col.innerHTML = htmlString;
        parent.appendChild(col);

    }

}

async function getOwnerData() {
    let accounts = currentUser.get("accounts");
    const options = { chain: 'rinkeby', address: accounts[0], token_address: CONTRACT_ADDRESS }
    return Moralis.Web3API.account.getNFTsForContract(options).then((result) => {
        console.log(result);

    })
}

async function initializeApp() {
    currentUser = Moralis.User.current();
    if (!currentUser) {
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }

    const options = { address: CONTRACT_ADDRESS, chain: "rinkeby" };
    let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    let NFTWithMetadata = await fetchNFTMetadata(NFTs.result);
    let ownerData = await getOwnerData();
    console.log(NFTWithMetadata);
    renderInventory(NFTWithMetadata);
}

initializeApp();

