Moralis.initialize("APP_ID");
Moralis.serverURL("SERVER URL");

async function initializeApp() {
    let currentUser = Moralis.User.currentUser();
    if (!currentUser) {
        //SIGN IN
        current = await Moralis.Web3.authenticate();
    }
}