const { ethers } = require("ethers");
// Define contract details
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; // Replace with deployed contract address
const contractABI = [
    0xd9145CCE52D386f254917e481eB44e9943F39138
    // Replace with actual ABI array generated by Remix or Hardhat
];

// Web3 provider setup
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Function to send a payment to the contract
async function makeContractPayment(amount) {
    try {
        const tx = await contract.pay({ value: ethers.utils.parseEther(amount.toString()) });
        console.log("Transaction successful! Hash:", tx.hash);
        alert("Transaction successful! Hash:", tx.hash);

        
    } catch (error) {
        console.error("Payment failed:", error);
        alert("Payment failed:", error);
    }
}

// Function for the contract owner to withdraw funds
async function withdrawFunds() {
    try {
        const tx = await contract.withdraw();
        console.log("Withdrawal successful! Hash:", tx.hash);
        alert("Withdrawal successful! Hash:", tx.hash);
        

    } catch (error) {
        console.error("Withdrawal failed:", error);
        alert("Withdrawal failed:", error);
    }
}
