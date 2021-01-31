import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Stretch1 from '../assets/stretch1.jpg';
import Stretch2 from '../assets/stretch2.jpg';
import Stretch3 from '../assets/stretch3.png';
import Stretch4 from '../assets/stretch4.png';

const Stretch =()=> {

    function detImage() {

        let x = Math.floor(Math.random() * 4) + 1;
        if (x == 1) {
            return (Stretch1)
        } else if (x == 2) {
            return (Stretch2)
        } else if (x == 3) {
            return (Stretch3)
        } else {
            return (Stretch4)
        }
    }
    return(
        <Image src={detImage()} rounded fluid/>
    )
}

export default Stretch;