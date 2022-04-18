import { SocketProvider, WalletProvider } from '@meemproject/react'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SocketProvider>
			<WalletProvider
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
				contractAddressMeemId={process.env.NEXT_PUBLIC_MEEM_ID_CONTRACT_ADDRESS}
			>
				<Component {...pageProps} />
			</WalletProvider>
		</SocketProvider>
	)
}
export default MyApp
