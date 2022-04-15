import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WalletProvider } from '@meemproject/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (<WalletProvider
    infuraId={process.env.NEXT_PUBLIC_INFURA_ID ?? ''}
            networkName={process.env.NEXT_PUBLIC_NETWORK ?? ''}
            contractAddressMeem={
              process.env.NEXT_PUBLIC_MEEM_CONTRACT_ADDRESS ?? ''
            }
            contractAddressAuction={
              process.env.NEXT_PUBLIC_AUCTION_CONTRACT_ADDRESS
            }
            auctionCurrencyAddress={
              process.env.NEXT_PUBLIC_AUCTION_CURRENCY_ADDRESS
            }
            contractAddressMeemId={
              process.env.NEXT_PUBLIC_MEEM_ID_CONTRACT_ADDRESS
            }
    > 
       <Component {...pageProps} />
       </WalletProvider>)

}

export default MyApp
