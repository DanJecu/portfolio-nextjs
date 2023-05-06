import Image from 'next/image';

interface SkillIconsProps {
    skill: Record<string, string>;
}

export const SkillIcons: React.FC<SkillIconsProps> = ({ skill }) => {
    return (
        <>
            {Object.entries(skill).map((value: [string, string]) => (
                <span
                    className='flex h-16 w-16 flex-col items-center justify-start text-center'
                    key={value[0]}
                >
                    <Image
                        src={value[1]}
                        alt={value[0]}
                        height='45'
                        width='45'
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
