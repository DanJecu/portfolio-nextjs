import Image from 'next/image';

interface SkillIconsProps {
    category: Record<string, string>;
}

export const SkillIcons: React.FC<SkillIconsProps> = ({ category }) => {
    return (
        <>
            {Object.entries(category).map((value: [string, string]) => (
                <span
                    className='mr-2 flex h-10 w-10 flex-col items-center justify-start text-center md:h-14 md:w-14 lg:h-14 lg:w-14'
                    key={value[0]}
                >
                    <Image
                        className='md:h-20 md:w-20'
                        src={value[1]}
                        alt={value[0]}
                        height='40'
                        width='40'
                    />
                    {value[0]
                        .split(' ')
                        .map((string: string, index: number) => {
                            return (
                                <h6
                                    className='pt-1 text-xs'
                                    key={`${index}-${string}`}
                                >
                                    {string}
                                </h6>
                            );
                        })}
                </span>
            ))}
        </>
    );
};
