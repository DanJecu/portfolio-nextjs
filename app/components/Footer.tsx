export const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <footer className='md: mx-auto  flex border-t-2 border-secondary p-4 text-secondary md:w-11/12'>
            <p className='mx-auto'>
                Dan Jecu · {currentYear} · All rights reserved
            </p>
        </footer>
    );
};