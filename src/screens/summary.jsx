import React, {Component} from 'react';
import Graph from './plot';
import Countdown from "react-countdown";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
class Summary extends Component {

    render() {
        return(
            <div id="root">
                <div className="container-fluid">
                    <div style={{
                        position: 'absolute', left: '50%', top: '45%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <div id="content">
                            Here are your stress levels today:
                            <br />
                            <Graph />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Summary;