# CRA + ethers-react-system

Quick start for using ethers-react-system in a new CRA


### Terminal 1
```
git clone git@github.com:rapid-eth/ethers-react-system.git
cd ethers-react-system
npm install
npm link
```

### Terminal 2
```
npx create-react-app ethers-react-system-experiment
rm yarn.lock
rm -rf node_modules
npm install
npm link ethers-react-system
npm run start
```