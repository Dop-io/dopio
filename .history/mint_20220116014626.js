const serverUrl = "https://inkmvcv5mupx.usemoralis.com:2053/server";
const appId = "zN8sE9c1gNR7UQaHoNCrV3AryV2JouXgQ3FYDhgS";
CONTRACT_ADDRESS = "0x924a32A26dbD2e17d70f3cdC529f26BE5A0B6803"

Moralis.start({ serverUrl, appId });

async function init() {
    let currentUser = Moralis.User.current();
    if (!currentUser) {
        //SIGN IN
        currentUser = await Moralis.Web3.authenticate();
    }
}