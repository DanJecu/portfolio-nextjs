import Image from 'next/image';

interface SkillIconsProps {
    category: Record<string, string>;
}

export const SkillIcons: React.FC<SkillIconsProps> = ({ category }) => {
    return (
        <>
            {Object.entries(category).map((value: [string, string]) => (
                <span
                    className='mr-2 flex h-10 w-10 flex-col items-center justify-start text-center lg:h-12 lg:w-12'
                    key={value[0]}
                >
                    <Image
                        className='md:h-16 md:w-16'
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
