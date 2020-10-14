const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

// puts new contracts onto the blockchain 
// migrating state of blockchain from one state to another
// deployer puts smart contracts on network
// we need to add network and accounts (these are in ganash ) and we need to know who gets tokens on the network
module.exports = async function(deployer, network, accounts) {
	// deploy Mock DAI token
	await deployer.deploy(DaiToken)
	const daiToken = await DaiToken.deployed()
	// Deploy Dapp token
	await deployer.deploy(DappToken)
	const dappToken = await DappToken.deployed()
	// Deploy tokenfarm
	await deployer.deploy(tokenFarm, dappToken.address, daiToken.address)
	const tokenFarm = await TokenFarm.deployed()

	// transfer all tokens to TokenFarm (1million)
	await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

	// transfer 100 mock DAI tokens to investor so the invester has somethign to send to the token farm
	await daiToken.transfer(accounts[1], '1000000000000000000000000')
}

