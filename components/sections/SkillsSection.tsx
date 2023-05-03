export const SkillsSection: React.FC = () => {
    return (
        <section className='flex h-auto flex-col justify-between gap-4 p-8 text-white'>
            <span className='flex w-[95%] items-center pb-4  lg:col-start-2  lg:mt-auto lg:w-[100%] lg:p-2'>
                <h2 className='pr-4 text-2xl font-bold lg:text-xl'>Skills</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </span>
            <div className='pb-6 text-center'>
                <h4 className='pb-1 text-xl'>Frontend</h4>
                <div className='h-96 rounded-lg bg-card p-2 shadow'></div>
            </div>
            <div className=' pb-6 text-center'>
                <h4 className='pb-1 text-xl'>Backend</h4>
                <div className='h-96 rounded-lg bg-card p-2 shadow'></div>
            </div>
            <div className='pb-6 text-center'>
                <h4 className='pb-1 text-xl'>Miscellaneous</h4>
                <div className='h-96 rounded-lg bg-card p-2 shadow'></div>
            </div>
        </section>
    );
};
