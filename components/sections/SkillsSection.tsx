import Image from 'next/image';
import { frontend, backend, misc } from '@/utils/icons';
import { SkillIcons } from '../SkillIcons';

export const SkillsSection: React.FC = () => (
    <section className='flex h-auto flex-col justify-between gap-4 p-8 text-white'>
        <span className='flex w-[95%] items-center pb-4  lg:col-start-2  lg:mt-auto lg:w-[100%] lg:p-2'>
            <h2 className='pr-4 text-2xl font-bold lg:text-xl'>Skills</h2>
            <div className='h-[1.5px] flex-1 bg-white'></div>
        </span>
        <div className='h-1/3 pb-6 text-center drop-shadow-sm'>
            <h4 className='pb-1 text-xl opacity-90'>Frontend</h4>
            <div className='grid h-96 grid-cols-3 content-center  justify-items-center gap-y-5 rounded-lg bg-card  px-6 py-5 text-secondary shadow drop-shadow-sm'>
                <SkillIcons skill={frontend} />
            </div>
        </div>
        <div className='h-1/3 pb-6 text-center drop-shadow-sm'>
            <h4 className='pb-1 text-xl opacity-90'>Backend</h4>
            <div className='grid h-96 grid-cols-3 content-center  justify-items-center gap-y-5 rounded-lg  bg-card px-6 py-5 text-secondary shadow drop-shadow-sm'>
                <SkillIcons skill={backend} />
            </div>
        </div>
        <div className='h-1/3 pb-6 text-center drop-shadow-sm'>
            <h4 className='pb-1 text-xl opacity-90'>Miscellaneous</h4>
            <div className='grid h-96  grid-cols-3 content-center  justify-items-center gap-y-5 rounded-lg  bg-card px-6 py-5 text-secondary shadow drop-shadow-sm'>
                <SkillIcons skill={misc} />
            </div>
        </div>
    </section>
);
