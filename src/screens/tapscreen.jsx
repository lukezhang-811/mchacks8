import React, {Component} from 'react';
import Tap from './tap.jsx';
import Countdown from 'react-countdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import axios from "axios";
import { API_URL } from "../index.js";


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
        setTimeout( async() => {
            console.log(this.state.clickTimes);
            /*const response = await fetch("http://127.0.0.1:8000/", {
                method: 'POST',
                body: JSON.stringify(this.state.clickTimes)
            })*/
            /*axios.post(API_URL, this.state.clickTimes).then(() => {
                this.props.resetState();
                this.props.toggle();
            });*/
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