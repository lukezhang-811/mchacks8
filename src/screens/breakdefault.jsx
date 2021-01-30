import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Countdown from "react-countdown";


class BreakDefault extends Component {

    componentWillMount(){
        setTimeout(() => {
            this.props.history.push('/break-end');
        }, 10000)
    }

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h1>Please Take a Break</h1>
                <div className='new-line'>
                    <Countdown date={Date.now() + 10000} />
                    <h2>
                        <Link to="/tap"style={{ textDecorastion: 'none'}}>Go Back To Work</Link>
                    </h2>
                    <h2>
                        <Link to="/summary"style={{ textDecorastion: 'none'}}>End Work Day!</Link>
                    </h2>
                </div>
            </div>
        )}
}
export default BreakDefault;