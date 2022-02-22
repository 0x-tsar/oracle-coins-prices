// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
  // AggregatorV3Interface public priceFeed;
  AggregatorV3Interface public BTC_USD;
  AggregatorV3Interface public DAI_USD;
  AggregatorV3Interface public ETH_USD;
  AggregatorV3Interface public LINK_MATIC;
  AggregatorV3Interface public MATIC_USD;
  AggregatorV3Interface public SAND_USD;
  AggregatorV3Interface public USDC_USD;
  AggregatorV3Interface public USDT_USD;

  constructor() {
    BTC_USD = AggregatorV3Interface(0x007A22900a3B98143368Bd5906f8E17e9867581b);
    DAI_USD = AggregatorV3Interface(0x0FCAa9c899EC5A91eBc3D5Dd869De833b06fB046);
    ETH_USD = AggregatorV3Interface(0x0715A7794a1dc8e42615F059dD6e406A6594651A);
    LINK_MATIC = AggregatorV3Interface(
      0x12162c3E810393dEC01362aBf156D7ecf6159528
    );
    MATIC_USD = AggregatorV3Interface(
      0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada
    );
    SAND_USD = AggregatorV3Interface(
      0x9dd18534b8f456557d11B9DDB14dA89b2e52e308
    );
    USDC_USD = AggregatorV3Interface(
      0x572dDec9087154dC5dfBB1546Bb62713147e0Ab0
    );
    USDT_USD = AggregatorV3Interface(
      0x92C09849638959196E976289418e5973CC96d645
    );
  }

  function btcUSDprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = BTC_USD.latestRoundData();
    return price;
  }

  function daiUSDprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = DAI_USD.latestRoundData();
    return price;
  }

  function ethUSDprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = ETH_USD.latestRoundData();
    return price;
  }

  function linkMATICprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = LINK_MATIC.latestRoundData();
    return price;
  }

  function maticUSDprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = MATIC_USD.latestRoundData();
    return price;
  }

  function sandUSDprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = SAND_USD.latestRoundData();
    return price;
  }

  function usdtUSDprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = USDT_USD.latestRoundData();
    return price;
  }

  function usdcUSDprice() public view returns (int256) {
    (
      uint80 roundID,
      int256 price,
      uint256 startedAt,
      uint256 timeStamp,
      uint80 answeredInRound
    ) = USDC_USD.latestRoundData();
    return price;
  }

  //
}
