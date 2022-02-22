require("dotenv").config();
const { ethers } = require("hardhat");
const hre = require("hardhat");
const PriceConsumerV3 = require("../artifacts/contracts/PriceConsumerV3.sol/PriceConsumerV3.json");

async function main() {
	// We get the contract to deploy
	const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
	const priceConsumer = await PriceConsumerV3.deploy();
	await priceConsumer.deployed();

	console.log("PriceConsumer deployed to:", priceConsumer.address);

	// const provider = new ethers.providers.JsonRpcProvider(
	//   "http://127.0.0.1:8545/"
	// );

	const provider = new ethers.providers.getDefaultProvider(process.env.mumbai);
	const signer = new ethers.Wallet(process.env.account, provider);

	// const priceConsumerV3 = new ethers.Contract(
	//   "0x8C96359016a713c7315eECcc5F6C19f1990a7E85",
	//   PriceConsumerV3.abi,
	//   signer
	// );

	// const linkToken = new ethers.Contract(
	//   "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
	//   [
	//     {
	//       constant: true,
	//       inputs: [],
	//       name: "name",
	//       outputs: [{ name: "", type: "string" }],
	//       payable: false,
	//       stateMutability: "view",
	//       type: "function",
	//     },
	//     {
	//       constant: false,
	//       inputs: [
	//         { name: "_spender", type: "address" },
	//         { name: "_value", type: "uint256" },
	//       ],
	//       name: "approve",
	//       outputs: [{ name: "", type: "bool" }],
	//       payable: false,
	//       stateMutability: "nonpayable",
	//       type: "function",
	//     },
	//     {
	//       constant: true,
	//       inputs: [],
	//       name: "totalSupply",
	//       outputs: [{ name: "", type: "uint256" }],
	//       payable: false,
	//       stateMutability: "view",
	//       type: "function",
	//     },
	//     {
	//       constant: false,
	//       inputs: [
	//         { name: "_from", type: "address" },
	//         { name: "_to", type: "address" },
	//         { name: "_value", type: "uint256" },
	//       ],
	//       name: "transferFrom",
	//       outputs: [{ name: "", type: "bool" }],
	//       payable: false,
	//       stateMutability: "nonpayable",
	//       type: "function",
	//     },
	//     {
	//       constant: true,
	//       inputs: [],
	//       name: "decimals",
	//       outputs: [{ name: "", type: "uint8" }],
	//       payable: false,
	//       stateMutability: "view",
	//       type: "function",
	//     },
	//     {
	//       constant: false,
	//       inputs: [
	//         { name: "_to", type: "address" },
	//         { name: "_value", type: "uint256" },
	//         { name: "_data", type: "bytes" },
	//       ],
	//       name: "transferAndCall",
	//       outputs: [{ name: "success", type: "bool" }],
	//       payable: false,
	//       stateMutability: "nonpayable",
	//       type: "function",
	//     },
	//     {
	//       constant: false,
	//       inputs: [
	//         { name: "_spender", type: "address" },
	//         { name: "_subtractedValue", type: "uint256" },
	//       ],
	//       name: "decreaseApproval",
	//       outputs: [{ name: "success", type: "bool" }],
	//       payable: false,
	//       stateMutability: "nonpayable",
	//       type: "function",
	//     },
	//     {
	//       constant: true,
	//       inputs: [{ name: "_owner", type: "address" }],
	//       name: "balanceOf",
	//       outputs: [{ name: "balance", type: "uint256" }],
	//       payable: false,
	//       stateMutability: "view",
	//       type: "function",
	//     },
	//     {
	//       constant: true,
	//       inputs: [],
	//       name: "symbol",
	//       outputs: [{ name: "", type: "string" }],
	//       payable: false,
	//       stateMutability: "view",
	//       type: "function",
	//     },
	//     {
	//       constant: false,
	//       inputs: [
	//         { name: "_to", type: "address" },
	//         { name: "_value", type: "uint256" },
	//       ],
	//       name: "transfer",
	//       outputs: [{ name: "success", type: "bool" }],
	//       payable: false,
	//       stateMutability: "nonpayable",
	//       type: "function",
	//     },
	//     {
	//       constant: false,
	//       inputs: [
	//         { name: "_spender", type: "address" },
	//         { name: "_addedValue", type: "uint256" },
	//       ],
	//       name: "increaseApproval",
	//       outputs: [{ name: "success", type: "bool" }],
	//       payable: false,
	//       stateMutability: "nonpayable",
	//       type: "function",
	//     },
	//     {
	//       constant: true,
	//       inputs: [
	//         { name: "_owner", type: "address" },
	//         { name: "_spender", type: "address" },
	//       ],
	//       name: "allowance",
	//       outputs: [{ name: "remaining", type: "uint256" }],
	//       payable: false,
	//       stateMutability: "view",
	//       type: "function",
	//     },
	//     {
	//       inputs: [],
	//       payable: false,
	//       stateMutability: "nonpayable",
	//       type: "constructor",
	//     },
	//     {
	//       anonymous: false,
	//       inputs: [
	//         { indexed: true, name: "from", type: "address" },
	//         { indexed: true, name: "to", type: "address" },
	//         { indexed: false, name: "value", type: "uint256" },
	//         { indexed: false, name: "data", type: "bytes" },
	//       ],
	//       name: "Transfer",
	//       type: "event",
	//     },
	//     {
	//       anonymous: false,
	//       inputs: [
	//         { indexed: true, name: "owner", type: "address" },
	//         { indexed: true, name: "spender", type: "address" },
	//         { indexed: false, name: "value", type: "uint256" },
	//       ],
	//       name: "Approval",
	//       type: "event",
	//     },
	//     {
	//       anonymous: false,
	//       inputs: [
	//         { indexed: true, name: "from", type: "address" },
	//         { indexed: true, name: "to", type: "address" },
	//         { indexed: false, name: "value", type: "uint256" },
	//       ],
	//       name: "Transfer",
	//       type: "event",
	//     },
	//   ],
	//   signer
	// );

	// const priceFeed = await priceConsumerV3.priceFeed;
	// console.log(priceFeed);

	// let aggregatorLink = await linkToken.balanceOf(priceConsumerV3.address);
	// console.log(`before: ${String(aggregatorLink)}`);

	// const tx = await priceConsumerV3.getLatestPrice();
	// console.log(Number(tx));

	// aggregatorLink = await linkToken.balanceOf(priceConsumerV3.address);
	// console.log(`after: ${String(aggregatorLink)}`);

	// const value = ethers.utils.parseUnits("0.1", "ether");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
