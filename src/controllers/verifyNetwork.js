export const verifyNetwork = async () => {

    // Dymension CoinHuntersTR Network Verifying
    const quaiID = await '0x2328';
    const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });
    
    if (chainId === quaiID){
        console.log("Bravo!, you are on the correct network (colosseum)")
        
    } else {
  
        console.log("oulalal, switch to the correct network");
        
        try {
        
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: quaiID}],
            });
            console.log("You have succefully switched to colosseum")
        
        } catch (switchError) {
            
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                console.log("This network is not available in your metamask, please add it")

                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                        { chainId: '0x2328', 
                        chainName:'colosseum',
                        rpcUrls:['https://rpc.paxos3.colosseum.quaiscan.io'],
                        nativeCurrency: {
                        symbol:'QUAI', // 2-6 characters long
                    decimals: 18
                    }
                        
                        }],
                    });
                    } catch (addError) {
                        // handle "add" error
                        console.log(addError);
                    }
            }
        }
    }
};