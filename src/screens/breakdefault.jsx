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
            <div id="root">
                <div className="container-fluid">
                    <div style={{
                        position: 'absolute', left: '50%', top: '45%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <div id="content">
                            <Countdown date={Date.now() + 30000} />
                            <h2>Please Take a Break!</h2> <br/>
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