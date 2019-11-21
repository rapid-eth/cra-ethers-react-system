import React, { useEffect } from 'react';
import { withEthers } from 'ethers-react-system';

const App = ({ ethers }) => {
  useEffect(() => {
    ethers.generateWallet()
  })

  console.log(ethers)

  return (
    <div style={{margin: '0 auto', width: 600}}>
      <h4>
        <a href="https://create-react-app.dev/">CRA</a> + <a href="https://github.com/rapid-eth/ethers-react-system">ethers-react-system</a>
      </h4>

      <h5>Ethers Provider</h5>
      {Object.entries(ethers).map(([key, value]) => {
        if (key === 'provider') return null; // provider is circular, skip to prevent an RTE
        return (
          <details key={key}>
            <summary>
              {key}
            </summary>
            <pre>
              {JSON.stringify(value, null, 2)}
            </pre>
          </details>
        )
      })
      }
    </div>
  )
}

export default withEthers(App);
