import React from 'react';
import Button from '@material-ui/core/Button'
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

export default class Footer extends React.Component {



    render() {
        return (
            <div style={wrapper}>
                <div style={brand}>众筹 DApp</div>
                <a href="/" >项目列表</a>
                <Button variant="contained" color="primary" style={sponsor}>发起项目</Button>
            </div>
        )
    }
}

