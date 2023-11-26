import React, { ReactElement } from 'react';
import styles from './TextScroll.module.scss';

interface Props {
    text: string;
    direction: 'left' | 'right';
}

export function TextScroll({ text, direction }: Props): ReactElement {
    return (
        <div className={styles.container}>
            <span
                className={
                    direction === 'left' ? styles.toLeft : styles.toRight
                }
            >
                {Array(10).fill(text).join(' ')}
            </span>
        </div>
    );
}
