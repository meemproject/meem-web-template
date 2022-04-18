# Meem Project Web Template -

## About

This template project serves as a starting point for a NextJS dDapp built on top of the Meem protocol. It contains our API library and React components that you can use to connect a wallet, authenticate with Meem and start building.

This template project is deliberately agnostic in regards to UI components, but does include some opinionated ESLint rules and other defaults that we have found to be helpful.

## Installation

1. Create a `.env` file in the root of the project and copy over the defaults from `.env.example`.
2. Open a terminal in the root of the project, and:
3. `yarn`
4. `yarn local`

## Usage

`_app.tsx` contains WalletProvider and SocketProvider.

- WalletProvider is your entry point for any pages or components that require a wallet address to use - for example, authenticating with the Meem API, making authenticated requests and calling the Meem contract.
- SocketProvider is a websocket implementation which enables you to listen to the Meem API and receive events when a Meem has been minted.
