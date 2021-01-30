import React, {Component} from 'react';
import Tap from './tap.jsx';
import Countdown from 'react-countdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class TapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickTimes: []
        }
        this.storeTime = this.storeTime.bind(this);
    }
    storeTime(date) {
        let newClickTimes = [...this.state.clickTimes, date];
        this.setState({...this.state, clickTimes:newClickTimes});
    }

    /*complete() {
        this.props.history.push('/break-default');
    }*/

    componentWillMount(){
        setTimeout(() => {
            console.log(this.state.clickTimes);
            this.props.history.push('/break-default');
        }, 15000)
    }

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <Tap addTime={this.storeTime}/>
            </div>
        )}
}

export default TapScreen;