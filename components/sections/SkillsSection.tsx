import { frontend, backend, misc } from '@/utils/icons';
import { SkillCard } from '../SkillCard';

export const SkillsSection: React.FC = () => (
    <section className='m-auto flex h-1/3 w-[95%] flex-col gap-4 p-2 text-white'>
        <span className='flex w-[95%] items-center p-7 lg:w-[50%] lg:px-12 lg:pb-12 lg:pt-24'>
            <h2 className='pr-4 text-2xl font-bold'>Skills</h2>
            <div className='h-[1.5px] flex-1 bg-white'></div>
        </span>
        <div
            className='m-auto flex w-11/12 flex-col lg:h-4/5 lg:w-[100%] lg:flex-row lg:gap-10
        '
        >
            <SkillCard category={frontend} title='Frontend' />
            <SkillCard category={backend} title='Backend' />
            <SkillCard category={misc} title='Miscellaneous' />
        </div>
    </section>
);
