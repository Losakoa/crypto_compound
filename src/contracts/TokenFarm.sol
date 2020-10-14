pragma solidity ^0.5.0;


//import smart contracts
import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
	// all code goes here

	// state var - this will be stored on the blockchain
	string public name = "Dapp Token Farm";
	//assigning dapptoken type and assigning it to state variables here
	DappToken public dappToken;
	DaiToken public daiToken;

	// steps to deploy to the network
	// step 1 deploy dai
	// step 2 deploy app
	// step 3 deploy token farm
	// we'll need to grab the addresses from the step 1 and 2 contract and pass them into this contract when its created
	
	// this is basically __init__ in python
	constructor(DappToken _dappToken, DaiToken _daiToken) public {
		dappToken = _dappToken;
		daiToken = _daiToken;
	}

}