import React from 'react';
import useSound from 'use-sound';
import Image from 'react-bootstrap/Image';
import Heart from '../assets/heart.svg';
import boopSfx from '../assets/click.mp3';
import Button from 'react-bootstrap/Button';

const Tap = (props) => {

    const [playBoop] = useSound(boopSfx);

    function handleClick() {
        playBoop();
        let timeNow = Date.now();
        console.log(timeNow);
        props.addTime(timeNow);
    }

    return (
        <div>
            <Button onClick={handleClick}>
                <Image src={Heart} />
            </Button>
        </div>
    )};

export default Tap;