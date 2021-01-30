import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <Link to="/tap"style={{ textDecorastion: 'none'}}>Start Working</Link>
        </div>
    )
}

export default Main;