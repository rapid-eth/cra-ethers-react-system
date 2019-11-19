import React, { useEffect } from 'react';
import { withEthers } from 'ethers-react-system';

const App = ({ ethers }) => {
  useEffect(() => {
    props.ethers.generateWallet()
  })
  console.log(Object.keys(ethers))
  console.log(ethers)
  return (
    <div>
      <a href="https://create-react-app.dev/">CRA</a> + <a href="https://github.com/rapid-eth/ethers-react-system">ethers-react-system</a>
    </div>
  )
}

export default withEthers(App);
