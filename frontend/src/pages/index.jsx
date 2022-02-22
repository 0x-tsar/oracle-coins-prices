import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Card from "../components/Card";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { connectEthereum } from "../ethereum";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Panel = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 10px;
`;

export const Modal = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	position: absolute;
	background-color: black;
	font-size: 25px;
	font-family: monospace, "Courier New", Courier;
	padding: 0 30px;
`;

export default function Home() {
	const [prices, setPrices] = useState({});
	const [metamaskActivated, setMetamaskActivated] = useState(false);
	//
	useEffect(() => {
		const done = async () => {
			const { account, priceConsumerV3 } = await connectEthereum();

			if (account) {
				setMetamaskActivated(true);

				let btcUSDprice = 0;
				let daiUSDprice = 0;
				let ethUSDprice = 0;
				let linkMATICprice = 0;
				let maticUSDprice = 0;
				let sandUSDprice = 0;
				let usdcUSDprice = 0;
				let usdtUSDprice = 0;

				btcUSDprice = Number(await priceConsumerV3.btcUSDprice());
				daiUSDprice = Number(await priceConsumerV3.daiUSDprice());
				ethUSDprice = Number(await priceConsumerV3.ethUSDprice());
				linkMATICprice = Number(await priceConsumerV3.linkMATICprice());
				maticUSDprice = Number(await priceConsumerV3.maticUSDprice());
				sandUSDprice = Number(await priceConsumerV3.sandUSDprice());
				usdcUSDprice = Number(await priceConsumerV3.usdcUSDprice());
				usdtUSDprice = Number(await priceConsumerV3.usdtUSDprice());

				setPrices((prices) => ({
					...prices,
					btcUSDprice,
					daiUSDprice,
					ethUSDprice,
					linkMATICprice,
					maticUSDprice,
					sandUSDprice,
					usdcUSDprice,
					usdtUSDprice,
				}));

				setInterval(async () => {
					btcUSDprice = Number(await priceConsumerV3.btcUSDprice());
					daiUSDprice = Number(await priceConsumerV3.daiUSDprice());
					ethUSDprice = Number(await priceConsumerV3.ethUSDprice());
					linkMATICprice = Number(await priceConsumerV3.linkMATICprice());
					maticUSDprice = Number(await priceConsumerV3.maticUSDprice());
					sandUSDprice = Number(await priceConsumerV3.sandUSDprice());
					usdcUSDprice = Number(await priceConsumerV3.usdcUSDprice());
					usdtUSDprice = Number(await priceConsumerV3.usdtUSDprice());

					setPrices((prices) => ({
						...prices,
						btcUSDprice,
						daiUSDprice,
						ethUSDprice,
						linkMATICprice,
						maticUSDprice,
						sandUSDprice,
						usdcUSDprice,
						usdtUSDprice,
					}));
				}, 10_000);
			} else {
				setMetamaskActivated(false);
			}
		};

		done();
		//
	}, []);

	return (
		<Container>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Prices from Chainlink</h1>

			{!metamaskActivated ? (
				<Modal>
					Activate Metamask on Mumbai Network and REFRESH THE PAGE to check the
					crypto prices comming from Chainlink.
				</Modal>
			) : (
				<Panel>
					{Object.keys(prices).map((item, i) => (
						<Card item={item} price={prices[item]}></Card>
					))}
				</Panel>
			)}
		</Container>
	);
}
