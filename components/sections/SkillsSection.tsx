import { frontend, backend, misc } from '@/utils/icons';
import { SkillCard } from '../SkillCard';

export const SkillsSection: React.FC = () => (
    <section className='flex h-1/3 flex-col justify-between gap-4 p-8 text-white lg:h-screen '>
        <span className='flex w-[95%] items-center pb-4  lg:col-start-2  lg:mt-auto lg:w-[100%] lg:p-2'>
            <h2 className='pr-4 text-2xl font-bold lg:text-xl'>Skills</h2>
            <div className='h-[1.5px] flex-1 bg-white'></div>
        </span>
        <div className='flex flex-col lg:flex-row'>
            <SkillCard category={frontend} title='Frontend' />
            <SkillCard category={backend} title='Backend' />
            <SkillCard category={misc} title='Miscellaneous' />
        </div>
    </section>
);
