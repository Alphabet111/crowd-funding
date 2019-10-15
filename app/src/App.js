import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectListContract from "./contracts/ProjectList.json";
import ProjectContract from "./contracts/Project.json";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import "./App.css";
import Button from '@material-ui/core/Button';
import { Grid, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import Layout from './component/Layout';
import './style/common.css'



const contractAddress = '0x550B37d60Eb314256B7b3547F278E80A610681A0';


class App extends React.Component {
  // state = { storageValue: 0, web3: null, accounts: [], contract: null };
  state = { limit: 0, name: '',min: 0,max:0,number:0,currentAmount:0,web3: null, accounts: [], contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
    

      // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = SimpleStorageContract.networks[networkId];
      // const instance = new web3.eth.Contract(
      //   SimpleStorageContract.abi,
      //   contractAddress
      //   // deployedNetwork && deployedNetwork.address,
      // );

       // Get the contract instance.
       const networkId = await web3.eth.net.getId();
       const deployedNetwork = ProjectContract.networks[networkId];
       const instance = new web3.eth.Contract(
         ProjectContract.abi,
         contractAddress
         // deployedNetwork && deployedNetwork.address,
       );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
     
    } catch (error) {
      console.log(error);

      // Catch any errors for any of the above operations.
      alert(
        error
        // `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    const { accounts } = this.state;
    
    return (
      <Router>
        <Layout>
          <Button variant='outlined' color='primary'>Welcome to Ethereum ICO DApp!</Button>
          <div style={wrapper}>
            <div>项目名称:{this.state.name}</div>
            <div className='clearfix'>
              <div style={descItem}>
                <div>{this.state.limit}</div>
                <div>募资上限</div>
              </div>
              <div style={descItem}>
                <div>{this.state.min}</div>
                <div>最小投资金额</div>
              </div>
              <div style={descItem}>
                <div>{this.state.max}</div>
                <div>最大投资金额</div>
              </div>
              <div style={descItem}>
                <div>{this.state.number}</div>
                <div>参投人数</div>
              </div>
              <div style={descItem}>
                <div>{this.state.currentAmount}</div>
                <div>已募资金额</div>
              </div>
            </div>
            <div className='clearfix' style={btnContainer}>
              <Button variant="contained" color="primary" style={invest}>立即投资</Button>
              <Button variant="contained" color="primary" style={checkDetail}>查看详情</Button>
            </div>
          </div>
        












        <div>
          <div>The stored value is: {this.state.storageValue}</div>
          <input type="number" ref='inputValue' style={{ width: 200, height: 50, marginTop: 100 }} />
          <button style={{ marginLeft: 50, width: 100, height: 50, padding: 20 }}
            onClick={() => {
              const value = Number(this.refs.inputValue.value);
              console.log(value);
              const { accounts, contract } = this.state;
              contract.methods.set(value).send({ from: accounts[0] }).then(() => {
                console.log('成功');
                contract.methods.get().call().then((result) => {
                  console.log(result);
                  this.setState({ storageValue: result })
                })
              });
            }}>设置</button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        </Layout>
      </Router>
    )
  }
}

class Home extends React.Component {
  render() {
    return <h2>Home</h2>;
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const wrapper = {
  border: '2px solid #f00',
  backgroundColor: '#fff',
  width: '400px',
  height: '200px',
  padding: '20px',
}

const descItem = {
  width: '100px',
  height: '40px',
  float: 'left',
  backgroundColor: '#eee',
  padding: '8px',
  marginLeft: '8px',
  marginTop: '4px'
}

const invest = {
  float: 'left',
}

const checkDetail = {
  float: 'left',
  marginLeft: '20px'
}

const btnContainer = {
  marginTop: '20px',
  marginLeft: '8px'
}
export default App;
