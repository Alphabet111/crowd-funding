import React from 'react';
import Button from '@material-ui/core/Button'
// import Project from '../utils/Project'
import web3 from '../utils/web3'
import ProjectContract from '../contracts/Project.json'

const contractAddress = '0xcbDA099803FDE635584f761F8ec8f6c8C48694b6'



export default class Project extends React.Component {
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
        this.refresh()
       
        
    }

    refresh = async () => {
        const addressArr = await this.props.contract.methods.getProjects().call()

       const contract = new web3.eth.Contract(
            ProjectContract.abi,
            addressArr[this.props.index]
        );
        const summary = await contract.methods.getSummary().call()
           
        this.setState({
            description: summary[0],
            minInvest: summary[1],
            maxInvest: summary[2],
            goal: summary[3],
            balance: summary[4],
            investorCount: summary[5],
            contract,
            owner: summary[7]
        })
    }


    render() {
            
        return (

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
                    <Button variant="contained" color="primary" style={invest}>立即投资</Button>
                    <Button variant="contained" color="primary" style={checkDetail}>查看详情</Button>
                </div>
            </div>









            // <div style={wrapper}>
            //     <div>The stored value is: {this.state.storageValue}</div>
            //     <input type="number" ref='inputValue' style={{ width: 200, height: 50, marginTop: 100 }} />
            //     <button style={{ marginLeft: 50, width: 100, height: 50, padding: 20 }}
            //         onClick={() => {
            //             const value = Number(this.refs.inputValue.value);
            //             console.log(value);
            //             // const { accounts, contract } = this.state;
            //             state.contract.methods.set(value).send({ from: state.account }).then(() => {
            //                 console.log('成功');
            //                 state.contract.methods.get().call().then((result) => {
            //                     console.log(result);
            //                     this.setState({ storageValue: result })
            //                 })
            //             });
            //         }}>设置</button>
            // </div>
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