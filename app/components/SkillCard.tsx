import { SkillIcons } from './SkillIcons';

interface SkillCardProps {
    category: Record<string, string>;
    title: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, title }) => {
    return (
        <div className='mx-auto flex h-1/3 w-[95%] flex-col items-center pb-6 text-center drop-shadow-sm md:w-[70%] lg:h-4/5 lg:w-full'>
            <h4 className='pb-1 text-xl opacity-80 lg:text-[1.35rem]'>{title}</h4>
            <div className='item-center flex h-96 flex-wrap items-center justify-center gap-5 rounded-lg bg-card px-6 pb-8 pt-4 text-secondary shadow drop-shadow-sm md:gap-12 md:pb-16 md:pt-8 lg:h-[30rem] lg:w-96 lg:justify-around lg:gap-6 lg:p-6 lg:pb-8'>
                <SkillIcons category={category} />
            </div>
        </div>
    );
};
