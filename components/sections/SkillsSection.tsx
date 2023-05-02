export const SkillsSection: React.FC = () => {
    return (
        <section className='flex flex-col justify-between gap-4 p-8 text-white [&>div]:flex-grow [&>div]:bg-card [&>div]:p-2 [&>div]:text-center'>
            <div className=''>
                <h4>Frontend</h4>
            </div>
            <div className=''>Backend</div>
            <div className=''>Miscellaneous</div>
        </section>
    );
};
