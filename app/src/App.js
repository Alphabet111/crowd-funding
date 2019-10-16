import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter,
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
import Home from './component/Home'
import CreateProject from './component/CreateProject.jsx';



const contractAddress = '0x95e828cE3014B5a2ef1DbA456e58AD912080eB5f';


class App extends React.Component {
  // state = { storageValue: 0, web3: null, accounts: [], contract: null };
  // state = { limit: 0, name: '',min: 0,max:0,number:0,currentAmount:0,web3: null, accounts: [], contract: null };
  state = {
    description: '',
    minInvest: 0,
    maxInvest: 0,
    goal: 0,
    balance: 0,
    investorCount: 0,
    contract: null,
    owner: null
  }
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      // const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      // const accounts = await web3.eth.getAccounts();


      // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = SimpleStorageContract.networks[networkId];
      // const instance = new web3.eth.Contract(
      //   SimpleStorageContract.abi,
      //   contractAddress
      //   // deployedNetwork && deployedNetwork.address,
      // );

      // Get the contract instance.
      //  const networkId = await web3.eth.net.getId();
      //  const deployedNetwork = ProjectContract.networks[networkId];
      //  const contract = new web3.eth.Contract(
      //    ProjectContract.abi,
      //    contractAddress
      //    // deployedNetwork && deployedNetwork.address,
      //  );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      // this.setState({ web3, accounts, contract: instance }, this.runExample);
      // const summary = await contract.methods.getSummary().call()
      // console.log(':合约的目标')
      // console.log(summary);

      // this.setState({
      //     description: summary[0],
      //     minInvest: summary[1],
      //     maxInvest: summary[2],
      //     goal: summary[3],
      //     balance: summary[4],
      //     investorCount: summary[5],
      //     contract,
      //     owner: summary[7]
      // })

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
    // const response = await contract.methods.get().call();

    // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    const { accounts } = this.state;

    return (
      <HashRouter>
        <div>
          <div style={wrapper}>
            <div style={brand}>众筹 DApp</div>
            <Link to="/" >项目列表</Link>
            <Link to='./create'>
            <Button variant="contained" color="primary" style={sponsor} onClick={this.createProject}>发起项目</Button>
            </Link>
          </div>
          <Switch>
              <HashRouter path="/create">
                <CreateProject />
              </HashRouter>
              <HashRouter path="/users">
                <Users />
              </HashRouter>
              <HashRouter path="/">
                <Home />
              </HashRouter>
            </Switch>
        </div>







        {/* <Layout> */}
          {/* <Button variant='outlined' color='primary'>Welcome to Ethereum ICO DApp!</Button>
          <div style={wrapper}>
                <div>项目名称:{this.state.description}</div>
                <div className='clearfix'>
                    <div style={descItem}>
                        <div>{this.state.goal}</div>
                        <div>募资上限</div>
                    </div>
                    <div style={descItem}>
                        <div>{this.state.minInvest}</div>
                        <div>最小投资金额</div>
                    </div>
                    <div style={descItem}>
                        <div>{this.state.maxInvest}</div>
                        <div>最大投资金额</div>
                    </div>
                    <div style={descItem}>
                        <div>{this.state.investorCount}</div>
                        <div>参投人数</div>
                    </div>
                    <div style={descItem}>
                        <div>{this.state.balance}</div>
                        <div>已募资金额</div>
                    </div>
                </div>
                <div className='clearfix' style={btnContainer}>
                <Link to="/users">Users
                    <Button variant="contained" color="primary" style={invest}>立即投资</Button>
                    </Link><Button variant="contained" color="primary" style={checkDetail}>查看详情</Button> */}
          {/* </div>
            </div> */}



          <div>
            {/* <div>The stored value is: {this.state.storageValue}</div>
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
            }}>设置</button> */}
            {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
            {/* </ul>  */}

          
          </div>

        {/* </Layout> */}
      </HashRouter>
    )
  }
}

// class Home extends React.Component {
//   render() {
//     return <h2>Home</h2>;
//   }
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


const wrapper = {
  margin: '0 auto',
  width: '95%',
  padding: '20px',
  display: 'flex',
  backgroundColor: '#eee'
}
const brand = {
  borderRight: '2px solid #CCCCCC',
  paddingRight: '1em',
  marginRight: '1em',
}

const sponsor = {
  position: 'absolute',
  right: '100px',
  marginTop: '-6px'
}









// const wrapper = {
//   border: '2px solid #f00',
//   backgroundColor: '#fff',
//   width: '400px',
//   height: '200px',
//   padding: '20px',
// }

// const descItem = {
//   width: '100px',
//   height: '40px',
//   float: 'left',
//   backgroundColor: '#eee',
//   padding: '8px',
//   marginLeft: '8px',
//   marginTop: '4px'
// }

// const invest = {
//   float: 'left',
// }

// const checkDetail = {
//   float: 'left',
//   marginLeft: '20px'
// }

// const btnContainer = {
//   marginTop: '20px',
//   marginLeft: '8px'
// }
export default App;
