import React from 'react';
import useSound from 'use-sound';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import boopSfx from '../assets/sun.mp3';
import Sun from '../assets/sun.jpg';

let isClicked = false;

const Music = () => {

    const [play, { stop }] = useSound(
        boopSfx,
        { volume: 0.5 }
    );

    function handleClick() {
        if(isClicked==false) {
            isClicked=true;
            play();
        } else {
            isClicked=false;
            stop();
        }

    }

    return (
        <div>
            <Button style={{background: "lightskyblue", border: "lightskyblue"}} onClick={handleClick}>
                <Image src={Sun}/>
            </Button>
        </div>
    )};

export default Music;
