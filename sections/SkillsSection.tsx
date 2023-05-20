import { frontend, backend, misc } from '@/utils/icons';
import { SkillCard } from '../components/SkillCard';
import { useRef } from 'react';

import { useInView } from 'framer-motion';

export const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const style = {
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };

    return (
        <section
            className='m-auto flex h-1/3 w-[95%] flex-col gap-4 p-2 text-white'
            style={style}
        >
            <span className='flex w-[95%] items-center p-7 lg:w-[50%] lg:px-12 lg:pb-12 lg:pt-24'>
                <h2 className='pr-4 text-2xl font-bold'>Skills</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </span>
            <div
                className='m-auto flex w-11/12 flex-col xl:h-4/5 xl:w-[100%] xl:flex-row xl:gap-10 xl:pb-24
        '
                ref={ref}
            >
                <SkillCard category={frontend} title='Frontend' />
                <SkillCard category={backend} title='Backend' />
                <SkillCard category={misc} title='Miscellaneous' />
            </div>
        </section>
    );
};
