import React from 'react';
import Button from '@material-ui/core/Button'
// import Project from '../utils/Project'
import web3 from '../utils/web3'
import ProjectListContract from '../contracts/ProjectList.json'
import ProjectContract from '../contracts/Project.json'
import Project from './Project';

const contractAddress = '0xcbDA099803FDE635584f761F8ec8f6c8C48694b6'


export default class Home extends React.Component {
    state = {
        contract : null,
        contracts: [],
    }

    componentDidMount = async () => {
        this.refresh()

    }

    refresh = async () => {
        const contract = new web3.eth.Contract(
            ProjectListContract.abi,
            contractAddress
        );
        const contracts = await contract.methods.getProjects().call()
        
        // var projects = []
        // contracts.map((address, i) => {
        //     const projContract = new web3.eth.Contract(
        //         ProjectContract.abi,
        //         address
        //     );
        //     var projObj = {}
        //     projContract.methods.getSummary().call().then(summary => {
        //         projObj["description"] = summary[0],
        //             projObj["minInvest"] = summary[1],
        //             projObj["maxInvest"] = summary[2],
        //             projObj["goal"] = summary[3],
        //             projObj["balance"] = summary[4],
        //             projObj["investorCount"] = summary[5],
        //             projObj["paymentsLength"] = summary[6],
        //             projObj["owner"] = summary[7]
        //         console.log("proobj哈哈哈哈" + projObj.description);
        //         projects.push(projObj)
        //         this.setState({projects})
        //     })
        // })

        this.setState({
            contract,
            contracts
        })

        // console.log("projects奥科吉发动机了解对方为:"+projects[0].description);

    }


    render() {
        // let contracts = this.state.contracts
        // console.log(contracts+"呵呵呵呵呵");
        return (

            <div >
                {this.state.contracts.map((contract,i) => {
                   return <Project key={i} index={i} contract ={this.state.contract} ></Project>
                })}
            </div>









        )
    }
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