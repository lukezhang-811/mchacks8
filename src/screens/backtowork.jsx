import React, {Component} from 'react';
import { Link } from "react-router-dom";

class BackToWork extends Component {
    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                GO BACK TO WORK YOU WHORE
                <h2>
                    <Link to="/tap"style={{ textDecorastion: 'none'}}>Go Back To Work</Link>
                </h2>
                <h2>
                    <Link to="/summary"style={{ textDecorastion: 'none'}}>End Work Day!</Link>
                </h2>
            </div>
        )
    }
}

export default BackToWork;