import React from "react";

import styled from "styled-components";

export const Container = styled.div`
	width: min-content;
	height: 230px;
	background-color: blueviolet;
	border-radius: 10px;
	margin: 10px;
	color: white;
	display: flex;
	flex-wrap: wrap;
	font-size: 20px;
	flex-direction: column;
	align-items: center;
	padding: 10px;

	h2 {
		margin: 0;
		padding: 0;
	}
`;

const Card = ({ item, price }) => {
	return (
		<Container>
			<p>{item}</p>
			<p>${price}</p>
		</Container>
	);
};

export default Card;
