import { CatsWiki } from '../projects/CatsWiki';
import { Cinemania } from '../projects/Cinemania';
import { MealApp } from '../projects/MealApp';

export const ProjectsSection: React.FC = () => {
    return (
        <section className='m-auto flex w-[100vw] flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_5fr_5fr_5fr] '>
            <span className='flex w-[95%] items-center justify-center p-7 text-white lg:col-start-1 lg:col-end-3 lg:mt-auto lg:w-[50%]  lg:pt-24'>
                <h2 className='pr-4 text-2xl font-bold '>Projects</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </span>
            <MealApp />
            <CatsWiki />
            <Cinemania />
        </section>
    );
};
