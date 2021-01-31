import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Countdown from "react-countdown";

import Music from './music';
import Meditate from './meditate';
import Weather from './weather';


class BreakDefault extends Component {

    /*componentWillMount(){
        setTimeout(() => {
            this.props.history.push('/break-end');
        }, 50000)
    }*/


    detActivity() {
        let x=Math.floor(Math.random()*4)+1;
        console.log(x);
        if(x==1) {
            return(<Music/>)
        } else if(x==2) {
            return(<div> <Meditate/> <br/> </div>)
        } else if(x==3) {
            return(<div><h3>Maybe go on a walk?</h3> <br/><Weather/> <br/></div>)
        }
    }

    handleClick() {
        this.detActivity();
    }

    render() {
        return (
            <div id="root">
                <div className="container-fluid">
                    <div style={{
                        position: 'absolute', left: '50%', top: '45%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <div id="content">
                            <Countdown date={Date.now() + 50000} />
                            <h2>Please Take a Break!</h2> <br/>
                            {this.detActivity()}
                            <Button variant="outline-warning" onClick={this.handleClick()}>
                                Show Me A Different Activity!
                            </Button> <br/> <br/>
                            <Button variant="outline-primary">
                                <Link to="/tap" style={{textDecorastion: 'none'}}>Go Back To Work</Link>
                            </Button> <br/> <br/>
                            <Button variant="outline-primary">
                                <Link to="/summary" style={{textDecorastion: 'none'}}>End Work Day!</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )}
}
export default BreakDefault;