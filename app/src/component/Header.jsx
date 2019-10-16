import React from 'react';
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
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

export default class Header extends React.Component {



    render() {
        return (
            <div style={wrapper}>
                <div style={brand}>众筹 DApp</div>
                <a href="/" >项目列表</a>
                <Button variant="contained" color="primary" style={sponsor} onClick={this.createProject}>发起项目</Button>
            </div>
        )
    }

    createProject = () => {
        console.log(this.props);
        // browserHistory.push('/create')
        let history = useHistory();
        history.push('/create')

    }
}

