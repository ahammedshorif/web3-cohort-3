import CreateToken from "../components/CreateToken"
import {ConnnectionProvider} from '@solana/wallet-adapter-react'
import { WalletModalProvider,WalletDisconnectButton,WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css'

function App() {
 

  return (
    <div>
       <CreateToken></CreateToken>
    </div>
  )
}

export default App
