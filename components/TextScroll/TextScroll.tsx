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
                {Array(4).fill(text).join(' ')}
            </span>
        </div>
    );
}

<div className='my-[30px] md:pt-10'>
    <h1 className='text-center font-bold opacity-90 text-shadow-lg'>I am a</h1>

    <TextScroll text='Full Stack Developer &middot; ' direction='left' />
    <TextScroll text='Life Student &middot; ' direction='right' />
    <TextScroll text='Cool Millenial &middot; ' direction='left' />
</div>;
