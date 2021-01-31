import React from 'react';
import useSound from 'use-sound';
import Image from 'react-bootstrap/Image';
import Tree1 from '../assets/tree1.svg';
import Tree2 from '../assets/tree2.svg';
import Tree3 from '../assets/tree3.svg';
import Tree4 from '../assets/tree4.svg';
import Tree5 from '../assets/tree5.svg';
import Tree6 from '../assets/tree6.svg';
import boopSfx from '../assets/drip.mp3';
import Pop from '../assets/pop.mp3';
import Button from 'react-bootstrap/Button';

let numClick = 0;

const Tap = (props) => {

    const [playBoop] = useSound(boopSfx);
    const [playPop] = useSound(Pop);

    function handleClick() {
        if(numClick==100) {
            playPop();
        } else {
            playBoop();
        }
        let timeNow = Date.now();
        console.log(timeNow);
        props.addTime(timeNow);
        numClick++;
    }

    function detImage() {
        if(numClick>100) {
            numClick = 0;
            return (<Image src={Tree1} />);
        } else if(numClick>50) {
            return (<Image src={Tree6} />);
        } else if (numClick>40) {
            return (<Image src={Tree5} />);
        } else if (numClick>30) {
            return (<Image src={Tree4} />);
        }  else if (numClick>20) {
            return (<Image src={Tree3} />);
        }  else if (numClick>10) {
            return (<Image src={Tree2} />);
        } else {
            return (<Image src={Tree1} />);
        }
    }

    return (
        <div>
            <Button style={{background: "lightskyblue", border: "lightskyblue"}} onClick={handleClick}>
                {detImage()}
            </Button>
        </div>
    )};

export default Tap;