import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class BackToWork extends Component {
    render() {
        return (
            <div id="root">
                <div class="container-fluid">
                    <div style={{
                        position: 'absolute', left: '50%', top: '45%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <div id="content">
                            <h2>Break is Over!</h2> <br/>
                            <Button variant="outline-primary">
                                <Link to="/tap"style={{ textDecorastion: 'none'}}>Go Back To Work</Link>
                            </Button> <br/> <br/>
                            <Button variant="outline-primary">
                                <Link to="/summary"style={{ textDecorastion: 'none'}}>End Work Day!</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BackToWork;