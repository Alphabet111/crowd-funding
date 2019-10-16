import React from 'react';
import Button from '@material-ui/core/Button';
import ProjectListContract from '../contracts/ProjectList.json'

const contractAddress = '0xcbDA099803FDE635584f761F8ec8f6c8C48694b6'

export default class CreateProject extends React.Component {

    componentDidMount = async () => {
        const contract = new web3.eth.Contract(
            ProjectListContract.abi,
            contractAddress
        );

        // contract.methods.createProject().send({ from: accounts[0] }).then(() => {

        // }
    }

    render() {
        return (
            <div>
                <h2>创建项目</h2>
                <div>
                    <p>项目名称:<input type='text'/></p>
                    <p>最小投资金额:<input type='text'/></p>
                    <p>最大投资金额:<input type='text'/></p>
                    <p>募资上限:<input type='text'/></p>
                    <Button variant="contained" color="primary" onClick={this.createProject}>创建</Button>
                </div>
            </div>
        )
    }
}