import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
// import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

const APP_ID = 'V9kmJcJpvC04h7W1WOLcTijRSYn3LZtP2ruWFUUn'
const SERVER_URL = 'https://4ui9novyuhdg.usemoralis.com:2053/server'

const Application = () => {
  const isServerInfo = !!(APP_ID && SERVER_URL);
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);
