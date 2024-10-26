const { ethers } = require("ethers");
// Connect to MetaMask
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Wallet connected!");
            alert("Wallet connected!");
        } catch (error) {
            console.error("Wallet connection failed:", error);
            alert("Wallet connection failed:", error);
        }
    } else {
        alert("MetaMask is not installed. Please install it to proceed.");
    }
}

// Switch to the Polygon network
async function switchToPolygon() {
    const polygonChainId = '0x89'; // Hex for 137
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: polygonChainId }],
        });
        console.log("Switched to Polygon network!");
        alert("Switched to Polygon network!");
    } catch (switchError) {
        if (switchError.code === 4902) {
            console.error("Polygon network not found in MetaMask. Please add it.");
            alert("Polygon network not found in MetaMask. Please add it.");
        }
    }
}
