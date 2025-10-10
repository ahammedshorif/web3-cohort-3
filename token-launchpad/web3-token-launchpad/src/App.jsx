import CreateToken from "../components/CreateToken"
import {ConnnectionProvider, WalletProvider} from '@solana/wallet-adapter-react'
import { WalletModalProvider,WalletDisconnectButton,WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

function App() {
 

  return (
    <ConnnectionProvider endpoint="http://api.devnet.solana.com">
      <WalletProvider wallets={[]}>
         <CreateToken></CreateToken>
       </WalletProvider>
    </ConnnectionProvider>
  )
}

export default App
