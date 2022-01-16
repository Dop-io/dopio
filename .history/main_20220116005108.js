// Moralis.initialize("rIDcnRq3Mps2hzqTbk0MLuhWhBp3sl9SvbWJcQfi"); //APP_ID
// Moralis.serverURL = "https://xupcupekjhqi.usemoralis.com:2053/server"; //SERVER URL 

const serverUrl = "https://inkmvcv5mupx.usemoralis.com:2053/server";
const appId = "zN8sE9c1gNR7UQaHoNCrV3AryV2JouXgQ3FYDhgS";

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
            .then(() => { return nft }))

    }
    return Promise.all(promises);


}

function renderInventory(NFTs) {
    const parent = document.getElementById("app");
    for (let i = 0; i <= NFTs.length; i++) {
        const nft = NFTs[i];
        let htmlString = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${nft.metadata.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nft.metadata.name}</h5>
                <p class="card-text">${nft.metadata.description}</p>
                <a href="#" class="btn btn-primary">BUY NFT</a>
            </div>
        </div>
        `

        let col = document.createElement("div");
        col.className = "col col-md-3"
        col.innerHTML = htmlString;
        parent.appendChild(col);

    }

}

async function initializeApp() {
    let currentUser = Moralis.User.current();
    if (!currentUser) {
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }
    alert("user is signed in")

    const options = { address: "0x924a32A26dbD2e17d70f3cdC529f26BE5A0B6803", chain: "rinkeby" };
    let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    let NFTWithMetadata = await fetchNFTMetadata(NFTs.result);
    console.log(NFTWithMetadata);
    renderInventory(NFTWithMetadata);
}

initializeApp();

