import React from 'react';
import styles from '../styles/Componentes/background.module.css';

const BackgroundVideo = () => {
    return (
        <div className={styles.videoContainer}>
            <video className={styles.video} autoPlay loop muted playsInline>
                <source src="/video/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <div className={styles.fallback}></div>
        </div>
    );
};

export default BackgroundVideo;
