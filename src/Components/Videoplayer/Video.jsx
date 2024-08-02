import React, { useRef } from 'react';
import './Video.css';
import College_video from '../../assets/Video.mp4';

const Video = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={College_video} autoPlay muted controls />
        </div>
    );
};

export default Video;
