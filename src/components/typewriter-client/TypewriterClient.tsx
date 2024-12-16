"use client";

import Typewriter from 'typewriter-effect';
import styles from './TypewriterClient.module.css';
import classNames from "classnames";

const TypewriterClient = () => {

    const classes = classNames(styles.container, styles.fadeOut);

    return (
        <div className={ classNames(classes, 'text-4xl', 'sm:text-7xl') }>
            <Typewriter
                options={{
                    strings: ["AMARA Sacha"],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                }}
            />
            <Typewriter
                options={{
                    strings: ["Software Engineer"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                }}
            />
        </div>
    );
}

export default TypewriterClient;